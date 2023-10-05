package com.hotelManagement.service;



import java.util.List;

import com.hotelManagement.dao.Customer;
import com.hotelManagement.error.GlobalException;

public interface CutomerService {

	public Customer registerCustomer( Customer customer);
	public void sendThankYouEmail(String customeremail);
	public List<Customer> getAllCustomer();
	public Customer getCutomerById(Integer customerid) throws GlobalException;
	public boolean validateCustomer(String enteredOtp);
	public Customer updateCustomerById(Integer customerid, Customer customer) throws GlobalException;
	public String updateCustomerEmailById(String customeremail, Integer customerid);
	public void deleteCustomerById(Integer customerid) throws GlobalException;
	public Customer getCustomerByEmail(String customeremail);
	public Customer getCustomerByPhone(String customerphone);
	public Customer loginCustomer(String customeremail, String customerpassword);
	public void sendEmailToAdmin( String customername, String customeremail,String to, String subject, String body);
	public Customer updateCustomerPassword(Integer customerid, String newPassword) throws GlobalException;

}
