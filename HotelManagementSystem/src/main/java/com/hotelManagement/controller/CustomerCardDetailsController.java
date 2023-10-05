package com.hotelManagement.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotelManagement.dao.CustomerCardDetails;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.service.CustomerCardDetailsService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerCardDetailsController 
{
    @Autowired
    private CustomerCardDetailsService customerCardDetailsService;
    
    //add customer card details
    @PostMapping("/addCustomerCardDetails")
    public ResponseEntity<CustomerCardDetails> addCustomerCardDetails( @Valid @RequestBody CustomerCardDetails customerCardDetails)
    {
    	CustomerCardDetails cd=customerCardDetailsService.addCustomerCardDetails(customerCardDetails);
      	 return new  ResponseEntity<CustomerCardDetails>(cd,HttpStatus.CREATED);

    }
    
    //put customer id to csustomercarddetails
    @PutMapping("/setCustomeridTocustomercarddetails/{customercardnumber}/{customerid}")
    public CustomerCardDetails setCustomeridTocustomercarddetails(@PathVariable String customercardnumber,@PathVariable Integer customerid) throws GlobalException
    {
		return customerCardDetailsService.setCustomeridTocustomercarddetails(customercardnumber,customerid);
    	
    }
    
    //get all customer card details  http://localhost:8080/getAllCustomerCardDetails
    @GetMapping("/getAllCustomerCardDetails")
    public List<CustomerCardDetails> getAllCustomerCardDetails()
    {
		return customerCardDetailsService.getAllCustomerCardDetails();
    	
    }
    
    //get customer card details By id 
    @GetMapping("/getCustomerCardDetailsByCusNum/{customercardnumber}")
    public CustomerCardDetails getCustomerCardDetailsByCusNum(@PathVariable ("customercardnumber") String customercardnumber) throws GlobalException
    {
    	return customerCardDetailsService.getCustomerCardDetailsByCusNum(customercardnumber);
    }
    
    //update customer details
    @PutMapping("/updateCustomerDetails/{customercardnumber}")
    public CustomerCardDetails updateCustomerDetails(@PathVariable ("customercardnumber") String customercardnumber,@RequestBody CustomerCardDetails customerCardDetails) throws GlobalException
    {
		return customerCardDetailsService.updateCustomerDetails(customercardnumber,customerCardDetails);
    	
    }
    
    
    //delete customer card details
    @DeleteMapping("/deleteCustomerCardDetails/{customercardnumber}")
    String deleteCustomerCardDetails(@PathVariable ("customercardnumber") String customercardnumber) throws GlobalException
    {
    	customerCardDetailsService.deleteCustomerCardDetails(customercardnumber);
    	return "Customer Card Detail deleted";
    }
    
}
