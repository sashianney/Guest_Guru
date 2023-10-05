package com.hotelManagement.service;



import java.util.List;

import com.hotelManagement.dao.CustomerCardDetails;
import com.hotelManagement.error.GlobalException;

public interface CustomerCardDetailsService {

	public CustomerCardDetails addCustomerCardDetails( CustomerCardDetails customerCardDetails);

	public CustomerCardDetails setCustomeridTocustomercarddetails(String customercardnumber, Integer customerid) throws GlobalException;

	public List<CustomerCardDetails> getAllCustomerCardDetails();

	public CustomerCardDetails updateCustomerDetails(String customercardnumber,
			CustomerCardDetails customerCardDetails) throws GlobalException;

	public void deleteCustomerCardDetails(String customercardnumber) throws GlobalException;

	public CustomerCardDetails getCustomerCardDetailsByCusNum(String customercardnumber) throws GlobalException;


}
