package com.hotelManagement.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.hotelManagement.dao.HotelBankAccount;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.service.HotelBankAccountService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HotelBankAccountController 
{
	@Autowired
	public HotelBankAccountService hotelBankAccountService;
	
	//add hotel bank account
	@PostMapping("/addHotelBankAccount")
	public ResponseEntity<HotelBankAccount> addHotelBankAccount(@Valid @RequestBody HotelBankAccount hotelBankAccount)
	{
		HotelBankAccount hba=hotelBankAccountService.addHotelBankAccount(hotelBankAccount);
		return new ResponseEntity<HotelBankAccount>(hba,HttpStatus.CREATED);
	}
	
	//set hotel id to gotel bank account
	@PutMapping("/setHotelidToHotelBankAccount/{hotelaccountnumber}/{hotelid}")
	public HotelBankAccount setHotelidToHotelBankAccount(@PathVariable String hotelaccountnumber,@PathVariable Integer hotelid) throws GlobalException
	{
		return hotelBankAccountService.setHotelidToHotelBankAccount(hotelaccountnumber,hotelid);
		
	}
	
	
	//get hotel bank account by hotel account number
	@GetMapping("/getHotelBankAccountByaccnum/{hotelaccountnumber}")
	public HotelBankAccount getHotelBankAccountByaccnum(@PathVariable ("hotelaccountnumber") String hotelaccountnumber) throws GlobalException
	{
		return hotelBankAccountService.getHotelBankAccountByaccnum(hotelaccountnumber);
	}
	//update hotel bank account
	@PutMapping("/updateHotelAccountDetails/{hotelaccountnumber}")
	HotelBankAccount updateHotelAccountDetails(@PathVariable ("hotelaccountnumber") String hotelaccountnumber,@RequestBody HotelBankAccount hotelBankAccount) throws GlobalException
	{
		return hotelBankAccountService.updateHotelAccountDetails(hotelaccountnumber,hotelBankAccount);
		
	}
	
	//delete hotel  bank account
	@DeleteMapping("/deleteHotelBankAccount/{hotelaccountnumber}")
	String deleteHotelBankAccount(@PathVariable ("hotelaccountnumber") String hotelaccountnumber) throws GlobalException
	{
		hotelBankAccountService.deleteHotelBankAccount(hotelaccountnumber);
		return "Hotel Bank Account deleted";
	}
}
