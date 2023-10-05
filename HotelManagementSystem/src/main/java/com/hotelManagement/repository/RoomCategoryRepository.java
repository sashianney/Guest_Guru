package com.hotelManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotelManagement.dao.RoomCategory;

@Repository
public interface RoomCategoryRepository extends JpaRepository<RoomCategory, Integer>{

}
