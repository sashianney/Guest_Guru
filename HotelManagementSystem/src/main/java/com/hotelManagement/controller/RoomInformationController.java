package com.hotelManagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotelManagement.dao.RoomInformation;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.service.RoomInformationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RoomInformationController
{
	@Autowired
	private RoomInformationService roomInformationService;
	
	//add room information
	@PostMapping("/addRoomInformation")
	public RoomInformation addRoomInformation(@RequestBody RoomInformation roomInformation )
	{
		return roomInformationService .addRoomInformation(roomInformation);
		
	}
	
	//put hotel admin id and hotel id to room information
	@PutMapping("/setHotelAdminidAndHotelid/{roomid}/{hoteladminid}/{hotelid}")
	public RoomInformation setHotelAdminidAndHotelid(@PathVariable Integer roomid,@PathVariable Integer hoteladminid,@PathVariable Integer hotelid ) throws GlobalException
	{
		return roomInformationService.setHotelAdminidAndHotelid(roomid,hoteladminid,hotelid);
		
	}
	
	//put roomcategory to room
	@PutMapping("/addCategoryToRoom/{roomid}/{roomcategoryid}")
	public RoomInformation addCategoryToRoom(@PathVariable Integer roomid,@PathVariable Integer roomcategoryid) throws GlobalException
	{
		return roomInformationService.addCategoryToRoom(roomid,roomcategoryid);
	}
	
	//put roomservice to room
	@PutMapping("/addServiceToRoom/{roomid}/{roomserviceid}")
	public RoomInformation addServiceToRoom(@PathVariable Integer roomid, @PathVariable Integer roomserviceid) throws GlobalException
	{
		return roomInformationService.addServiceToRoom(roomid,roomserviceid);
		
	}
	
	@PutMapping("/updateIsBookedStatusByRoomId/{roomid}")
	public boolean updateIsBookedStatusByRoomId(@PathVariable("roomid") Integer roomid) {
		return roomInformationService.updateIsBookedStatusByRoomId(roomid);
	}
	
	@PutMapping("/reUpdateIsBookedStatusByRoomId/{roomid}")
	public boolean reUpdateIsBookedStatusByRoomId(@PathVariable("roomid") Integer roomid) {
		return roomInformationService.reUpdateIsBookedStatusByRoomId(roomid);
	}
	//get all room information http://localhost:8080/getAllRoomInformation
   	@GetMapping("/getAllRoomInformation")
   	public List<RoomInformation> getAllRoomInformation()
   	{
		return roomInformationService.getAllRoomInformation();
   		
   	}
   	
   	@GetMapping("/getAllRoomInformationByHotelId/{hotelid}")
   	public List<RoomInformation> getAllRoomInformationByHotelId(@PathVariable ("hotelid") Integer hotelid)
   	{
   		return roomInformationService.getAllRoomInformationByHotelId(hotelid);
   	}
	
   	@GetMapping("/getAllRoomsInformationByHotelAmdinId/{hoteladminid}")
   	public List<RoomInformation> getAllRoomsInformationByHotelAmdinId(@PathVariable("hoteladminid") Integer hoteladminid)
   	{
   		return roomInformationService.getAllRoomsInformationByHotelAmdinId(hoteladminid);
   	}
   	
	//get room information by id   http://localhost:8080/getRoomInformationById/1
   	@GetMapping("/getRoomInformationById/{roomid}")
   	public RoomInformation getRoomInformationById(@PathVariable ("roomid") Integer roomid) throws GlobalException
   	{
		return roomInformationService.getRoomInformationById(roomid);
   
   	}
   	
   	//put mapping for update record of room information
   	@PutMapping("/updateRoomInformationById/{roomid}")
   	RoomInformation updateRoomInformationById(@PathVariable ("roomid") Integer roomid,@RequestBody RoomInformation roomInformation) throws GlobalException
   	{
		return roomInformationService.updateRoomInformationById(roomid,roomInformation);
   		
   	}
   	
   	//delete room information
   	@DeleteMapping("/deleteRoomInformationById/{roomid}")
   	String deleteRoomInformationById(@PathVariable ("roomid") Integer roomid) throws GlobalException
   	{
   		roomInformationService.deleteRoomInformationById(roomid);
   		return "Room Information deleted";
   	}
}
