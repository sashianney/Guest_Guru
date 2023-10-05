package com.hotelManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelManagement.dao.HotelAdmin;
import com.hotelManagement.dao.HotelInformation;
import com.hotelManagement.dao.RoomCategory;
import com.hotelManagement.dao.RoomInformation;
import com.hotelManagement.dao.RoomService;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.repository.HotelAdminRepository;
import com.hotelManagement.repository.HotelInformationRepository;
import com.hotelManagement.repository.RoomCategoryRepository;
import com.hotelManagement.repository.RoomInformationRepository;
import com.hotelManagement.repository.RoomServiceRepository;

@Service
public class RoomInformationServiceImpl implements RoomInformationService
{
    @Autowired
    private RoomInformationRepository roomInformationRepository;
    
    @Autowired
    private HotelAdminRepository hotelAdminRepository;
     
    @Autowired
    private HotelInformationRepository hotelInformationRepository;
    
    @Autowired
    private RoomCategoryRepository roomCategoryRepository;
    
    @Autowired
    private RoomServiceRepository  roomServiceRepository;
    
	@Override
	public RoomInformation addRoomInformation(RoomInformation roomInformation) {
		return roomInformationRepository.save(roomInformation);
	}
	
	
	
	@Override
	public RoomInformation setHotelAdminidAndHotelid(Integer roomid, Integer hoteladminid, Integer hotelid) throws GlobalException {
		RoomInformation roomInformation=roomInformationRepository.findById(roomid).orElse(null);
		HotelAdmin hotelAdmin=hotelAdminRepository.findById(hoteladminid).orElse(null);
		HotelInformation hotelInformation=hotelInformationRepository.findById(hotelid).orElse(null);
		
		if(roomInformation != null && hotelAdmin!= null && hotelInformation!=null) {
			roomInformation.setHotelAdmin(hotelAdmin);
			roomInformation.setHotelInformation(hotelInformation);
			return roomInformationRepository.save(roomInformation);
		}else {
			throw new GlobalException("one or more entities not found");
		}
	}
	

	@Override
	public boolean updateIsBookedStatusByRoomId(Integer roomid) {
		RoomInformation roomInformation=roomInformationRepository.findByRoomId(roomid);
		
		if(roomInformation!=null) {
			roomInformation.setIsBooked(true);
			roomInformationRepository.save(roomInformation);
			return true;
		}else {
			return false;
		}
	}
	
	
	@Override
	public boolean reUpdateIsBookedStatusByRoomId(Integer roomid) {
		RoomInformation roomInformation=roomInformationRepository.findByRoomId(roomid);
		if(roomInformation!=null) {
			roomInformation.setIsBooked(null);
			roomInformationRepository.save(roomInformation);
			return true;
		}else {
			return false;
		}
	}
	
	@Override
	public RoomInformation addCategoryToRoom(Integer roomid, Integer roomcategoryid) throws GlobalException 
	{
		Optional<RoomInformation> ri=roomInformationRepository.findById(roomid);
		if(!ri.isPresent()) {
			throw new GlobalException("Room not exist");
		}
		Optional <RoomCategory> rc=roomCategoryRepository.findById(roomcategoryid);
		if(!rc.isPresent()) {
		throw new GlobalException("Room Category not exist");
	}
		RoomInformation ri1=roomInformationRepository.findById(roomid).get();
		RoomCategory cr1= roomCategoryRepository.findById(roomcategoryid).get();
		if(ri1!=null) {
			ri1.addCategoryToRoom(cr1);
		}
		return roomInformationRepository.save(ri1);
		
    }



	@Override
	public RoomInformation addServiceToRoom(Integer roomid, Integer roomserviceid) throws GlobalException
	{
		Optional<RoomInformation> ri=roomInformationRepository.findById(roomid);
		if(!ri.isPresent()) {
			throw new GlobalException("Room not exist");
		}
		Optional <RoomService> rs=roomServiceRepository.findById(roomserviceid);
		if(!rs.isPresent()) {
		throw new GlobalException("Room Service not exist");
	}
		RoomInformation ri1=roomInformationRepository.findById(roomid).get();
		RoomService rs1= roomServiceRepository.findById(roomserviceid).get();
		if(ri1!=null) {
			ri1.addServiceToRoom(rs1);
		}
		return roomInformationRepository.save(ri1);
		
    }

	// Site Admin
	@Override
	public List<RoomInformation> getAllRoomInformation() {
		return roomInformationRepository.findAll();
	}
	
	
	@Override
	public List<RoomInformation> getAllRoomInformationByHotelId(Integer hotelid) {
		return roomInformationRepository.findRoomInformationByHotelId(hotelid);
	}
	
	
	
	// Hotel Admin id
	
	@Override
	public List<RoomInformation> getAllRoomsInformationByHotelAmdinId(Integer hoteladminid) {
		return roomInformationRepository.findRoomInformationByHotelAdminId(hoteladminid);
	}


	

	@Override
	public RoomInformation getRoomInformationById(Integer roomid) throws GlobalException {
		Optional<RoomInformation> ri=roomInformationRepository.findById(roomid);
		RoomInformation ri1=null;
		if(!ri.isPresent()) {
			throw new GlobalException("Room information with id "+roomid+" not found");
		}
		ri1=roomInformationRepository.findById(roomid).get();
		return ri1;
	}



	@Override
	public RoomInformation updateRoomInformationById(Integer roomid, RoomInformation roomInformation) throws GlobalException {
		Optional<RoomInformation> ri=roomInformationRepository.findById(roomid);
		RoomInformation ri1=null;
		if(ri.isPresent()) {
			ri1=ri.get();
			if(roomInformation.getRoomnumber()!=null) {
				ri1.setRoomnumber(roomInformation.getRoomnumber());
			}
			if(roomInformation.getRoompriceperday()!=null) {
				ri1.setRoompriceperday(roomInformation.getRoompriceperday());
			}
			if(roomInformation.getRoomdescription()!=null) {
				ri1.setRoomdescription(roomInformation.getRoomdescription());
			}
			if(roomInformation.getRoomimageurl()!=null) {
				ri1.setRoomimageurl(roomInformation.getRoomimageurl());
			}
			if(roomInformation.getNumberofpeople()!=null) {
				ri1.setNumberofpeople(roomInformation.getNumberofpeople());
			}
		}else {
			throw new GlobalException("Room information with "+roomid+" not found");
		}
		return roomInformationRepository.save(ri1);
	}



	@Override
	public void deleteRoomInformationById(Integer roomid) throws GlobalException {
		Optional<RoomInformation> ri=roomInformationRepository.findById(roomid);
		RoomInformation ri1=null;
		if(!ri.isPresent()) {
			throw new GlobalException("Room Information with id "+roomid+" not found");
		}
		roomInformationRepository.deleteById(roomid);
	}





	

	

	
	}
	
	



