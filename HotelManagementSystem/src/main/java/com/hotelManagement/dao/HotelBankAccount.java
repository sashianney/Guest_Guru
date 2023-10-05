package com.hotelManagement.dao;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;
@Entity
@Table(name="hotelbankaccount")
public class HotelBankAccount 
{
	 @Id
	 @Pattern(message = "Invalid Account Number", regexp = "\\d{11}$")
     private String hotelaccountnumber;
	 @Column(nullable=false)
     private Integer hotelaccountbalance;
	 @Column(nullable=false)
	 @Pattern(message="Please Enter valid pin",regexp="\\d{4}$")
	 private String pin;
	 
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="hotelid")
	 private HotelInformation hotelinformation;
	 
	 
	public HotelBankAccount() {
		super();
	}
	public HotelBankAccount(String hotelaccountnumber, Integer hotelaccountbalance,String pin) {
		super();
		this.hotelaccountnumber = hotelaccountnumber;
		this.hotelaccountbalance = hotelaccountbalance;
		this.pin=pin;
	}
	public String getHotelaccountnumber() {
		return hotelaccountnumber;
	}
	public void setHotelaccountnumber(String hotelaccountnumber) {
		this.hotelaccountnumber = hotelaccountnumber;
	}
	public Integer getHotelaccountbalance() {
		return hotelaccountbalance;
	}
	public void setHotelaccountbalance(Integer hotelaccountbalance) {
		this.hotelaccountbalance = hotelaccountbalance;
	}
	
	public HotelInformation getHotelinformation() {
		return hotelinformation;
	}
	public void setHotelinformation(HotelInformation hotelinformation) {
		this.hotelinformation = hotelinformation;
	}
	
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	
	@Override
	public String toString() {
		return "HotelBankAccount [hotelaccountnumber=" + hotelaccountnumber + ", hotelaccountbalance="
				+ hotelaccountbalance + ", pin=" + pin + ", hotelinformation=" + hotelinformation + "]";
	}
	public void setHotelidToHotelBankAccount(HotelInformation hi) {
          this.hotelinformation=hi;		
	}
	
     
     
	 
}
