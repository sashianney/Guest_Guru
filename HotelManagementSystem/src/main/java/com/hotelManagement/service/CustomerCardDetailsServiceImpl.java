package com.hotelManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelManagement.dao.Customer;
import com.hotelManagement.dao.CustomerCardDetails;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.repository.CustomerCardDetailsRepository;
import com.hotelManagement.repository.CustomerRepository;

@Service
public class CustomerCardDetailsServiceImpl implements CustomerCardDetailsService
{

	@Autowired
	private CustomerCardDetailsRepository customerCardDetailsRepository;

	@Autowired
	private CustomerRepository customerRepository;
	@Override
	public CustomerCardDetails addCustomerCardDetails(CustomerCardDetails customerCardDetails) {
		return customerCardDetailsRepository.save(customerCardDetails);
	}

	@Override
	public CustomerCardDetails setCustomeridTocustomercarddetails(String customercardnumber, Integer customerid) throws GlobalException 
	{
		Optional<CustomerCardDetails> customerCardDetails=customerCardDetailsRepository.findById(customercardnumber);
		if(!customerCardDetails.isPresent()) {
			throw new GlobalException("customerCardDetails does not exist");
		}
		Optional<Customer> customer=customerRepository.findById(customerid);
		if(!customer.isPresent()) {
			throw new GlobalException("customer does not exist");
		}
		CustomerCardDetails cc=customerCardDetailsRepository.findById(customercardnumber).get();
		Customer cu= customerRepository.findById(customerid).get();
		if(cc!=null) {
			
		    cc.setCustomeridTocustomercarddetails(cu);
		}
		return customerCardDetailsRepository.save(cc);
	}

	
	@Override
	public List<CustomerCardDetails> getAllCustomerCardDetails() {
		return customerCardDetailsRepository.findAll();
	}

	@Override
	public CustomerCardDetails updateCustomerDetails(String customercardnumber,
			CustomerCardDetails customerCardDetails) throws GlobalException {
		Optional<CustomerCardDetails> cc=customerCardDetailsRepository.findById(customercardnumber);
		CustomerCardDetails cc1=null;
		if(cc.isPresent()) {
			cc1=cc.get();
			if(customerCardDetails.getCustomeraccountbalance()!=null) {
				cc1.setCustomeraccountbalance(customerCardDetails.getCustomeraccountbalance());
			}
			if(customerCardDetails.getPin()!=null) {
				cc1.setPin(customerCardDetails.getPin());
			}
		}else {
			throw new GlobalException("Cutomerdeatils with card number "+customercardnumber+" not found");
		}
		return customerCardDetailsRepository.save(cc1);
	}

	@Override
	public void deleteCustomerCardDetails(String customercardnumber) throws GlobalException {
		Optional<CustomerCardDetails> cc=customerCardDetailsRepository.findById(customercardnumber);
		CustomerCardDetails cc1=null;
		if(!cc.isPresent()) {
			throw new GlobalException("Customer Details with Card Number "+customercardnumber+" not found");
			
		}
		customerCardDetailsRepository.deleteById(customercardnumber);
	}

	@Override
	public CustomerCardDetails getCustomerCardDetailsByCusNum(String customercardnumber) throws GlobalException {
		Optional<CustomerCardDetails> cc=customerCardDetailsRepository.findById(customercardnumber);
		CustomerCardDetails cc1=null;
		if(!cc.isPresent()) {
			throw new GlobalException("Customer card details with cuard number "+customercardnumber+" not found");
		}
		cc1=customerCardDetailsRepository.findById(customercardnumber).get();
		return cc1;
	}
	

}
