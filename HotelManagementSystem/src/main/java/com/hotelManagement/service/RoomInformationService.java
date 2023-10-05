package com.hotelManagement.service;


import java.util.List;

import com.hotelManagement.dao.RoomInformation;
import com.hotelManagement.error.GlobalException;

public interface RoomInformationService {


	public RoomInformation addRoomInformation(RoomInformation roomInformation);

	public RoomInformation setHotelAdminidAndHotelid(Integer roomid, Integer hoteladminid, Integer hotelid) throws GlobalException;

	public RoomInformation addCategoryToRoom(Integer roomid, Integer roomcategoryid) throws GlobalException;

	public RoomInformation addServiceToRoom(Integer roomid, Integer roomserviceid) throws GlobalException;

	public List<RoomInformation> getAllRoomInformation();

	public RoomInformation getRoomInformationById(Integer roomid) throws GlobalException;

	public RoomInformation updateRoomInformationById(Integer roomid, RoomInformation roomInformation) throws GlobalException;

	public void deleteRoomInformationById(Integer roomid) throws GlobalException;

	public List<RoomInformation> getAllRoomInformationByHotelId(Integer hotelid);

	public List<RoomInformation> getAllRoomsInformationByHotelAmdinId(Integer hoteladminid);

	public boolean updateIsBookedStatusByRoomId(Integer roomid);

	public boolean reUpdateIsBookedStatusByRoomId(Integer roomid);


}
