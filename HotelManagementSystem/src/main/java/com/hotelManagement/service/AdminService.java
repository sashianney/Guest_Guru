package com.hotelManagement.service;


import java.util.List;

import com.hotelManagement.dao.Admin;
import com.hotelManagement.error.GlobalException;

public interface AdminService {

	public Admin registerAdmin(Admin admin);

	public void deleteAdminById(Integer adminid) throws GlobalException;

	public List<Admin> getAllAdmin();

	public Admin getAdminById(Integer adminid) throws GlobalException;

	public Admin updateAdminById(Integer adminid, Admin admin) throws GlobalException;

	public Admin getAdminByEmail(String adminemail);

	public Admin loginAdmin(String adminemail, String adminpassword);

	public Admin updateAdminPassword(Integer adminid, String newPassword) throws GlobalException;

}
