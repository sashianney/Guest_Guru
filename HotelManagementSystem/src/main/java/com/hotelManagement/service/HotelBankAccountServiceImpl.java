package com.hotelManagement.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelManagement.dao.HotelBankAccount;
import com.hotelManagement.dao.HotelInformation;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.repository.HotelBankAccountRepository;
import com.hotelManagement.repository.HotelInformationRepository;

@Service
public class HotelBankAccountServiceImpl implements HotelBankAccountService {

	@Autowired
	public HotelBankAccountRepository hotelBankAccountRepository;
	@Autowired
	public HotelInformationRepository hotelInformationRepository;
	@Override
	public HotelBankAccount addHotelBankAccount(HotelBankAccount hotelBankAccount) {
		return hotelBankAccountRepository.save(hotelBankAccount);
	}
	@Override
	public HotelBankAccount setHotelidToHotelBankAccount(String hotelaccountnumber, Integer hotelid)
			throws GlobalException 
	{
		
			Optional<HotelBankAccount> hotelBankAccount=hotelBankAccountRepository.findById(hotelaccountnumber);
			if(!hotelBankAccount.isPresent()) {
				throw new GlobalException("hotelBankAccount does not exist");
			}
			Optional<HotelInformation> hi=hotelInformationRepository.findById(hotelid);
			if(!hi.isPresent()) {
				throw new GlobalException("Hotel information does not exist");
			}
			HotelBankAccount hba=hotelBankAccountRepository.findById(hotelaccountnumber).get();
			HotelInformation hi1= hotelInformationRepository.findById(hotelid).get();
			if(hba!=null) {
				
			    hba.setHotelidToHotelBankAccount(hi1);
			}
			return hotelBankAccountRepository.save(hba);
		
		
	}
	@Override
	public HotelBankAccount updateHotelAccountDetails(String hotelaccountnumber, HotelBankAccount hotelBankAccount) throws GlobalException {
       Optional<HotelBankAccount> hb=hotelBankAccountRepository.findById(hotelaccountnumber);
       HotelBankAccount hb1=null;
       if(hb.isPresent()) {
    	   hb1=hb.get();
    	   
    	   if(hotelBankAccount.getHotelaccountbalance()!=null) {
    		   hb1.setHotelaccountbalance(hotelBankAccount.getHotelaccountbalance());
    	   }
    	   if(hotelBankAccount.getPin()!=null) {
    		   hb1.setPin(hotelBankAccount.getPin());
    	   }
       }else {
    	   throw new GlobalException("HotelAccount with account number "+hotelaccountnumber+" not found");
       }
		return hotelBankAccountRepository.save(hb1);
	}
	@Override
	public void deleteHotelBankAccount(String hotelaccountnumber) throws GlobalException {
		Optional<HotelBankAccount> hb=hotelBankAccountRepository.findById(hotelaccountnumber);
		HotelBankAccount hb1=null;
		if(!hb.isPresent()) {
			throw new GlobalException("Hotel Bank account with accountnumber "+hotelaccountnumber+" not found");
		}
		hotelBankAccountRepository.deleteById(hotelaccountnumber);
	}
	
	@Override
	public HotelBankAccount getHotelBankAccountByaccnum(String hotelaccountnumber) throws GlobalException {
		Optional<HotelBankAccount> hb=hotelBankAccountRepository.findById(hotelaccountnumber);
		HotelBankAccount hb1=null;
		if(!hb.isPresent()) {
			throw new GlobalException("Hotel Bank Acccount with account number "+hotelaccountnumber+" not found");
		}
		hb1=hotelBankAccountRepository.findById(hotelaccountnumber).get();
	
		return hb1;
	}
	
	
	}