package com.hotelManagement.service;

import java.util.List;

import com.hotelManagement.dao.RoomService;
import com.hotelManagement.error.GlobalException;

public interface RoomServiceService {

	public RoomService addRoomService(RoomService roomService);

	public List<RoomService> getAllRoomService();

	public RoomService getRoomServiceById(Integer roomserviceid) throws GlobalException;

	public void deleteRoomServiceById(Integer roomserviceid) throws GlobalException;

	

}
