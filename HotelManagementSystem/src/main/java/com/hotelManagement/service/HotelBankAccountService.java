package com.hotelManagement.service;


import com.hotelManagement.dao.HotelBankAccount;
import com.hotelManagement.error.GlobalException;

public interface HotelBankAccountService {

	public HotelBankAccount addHotelBankAccount(HotelBankAccount hotelBankAccount);

	public HotelBankAccount setHotelidToHotelBankAccount(String hotelaccountnumber, Integer hotelid) throws GlobalException;

	public HotelBankAccount updateHotelAccountDetails(String hotelaccountnumber, HotelBankAccount hotelBankAccount) throws GlobalException;

	public void deleteHotelBankAccount(String hotelaccountnumber) throws GlobalException;

	public HotelBankAccount getHotelBankAccountByaccnum(String hotelaccountnumber) throws GlobalException;

}
