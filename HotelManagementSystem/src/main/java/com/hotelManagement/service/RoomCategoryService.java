package com.hotelManagement.service;

import java.util.List;

import com.hotelManagement.dao.RoomCategory;
import com.hotelManagement.error.GlobalException;

public interface RoomCategoryService {

	public RoomCategory addRoomCategory(RoomCategory roomCategory);

	public List<RoomCategory> getAllRoomCategory();

	public RoomCategory getRoomCategoryById(Integer roomcategoryid) throws GlobalException;

	public void deleteRoomCategoryById(Integer roomcategoryid) throws GlobalException;

}
