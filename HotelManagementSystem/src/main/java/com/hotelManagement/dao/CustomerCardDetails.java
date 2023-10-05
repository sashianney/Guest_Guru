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
@Table(name="customercarddetails")
public class CustomerCardDetails 
{
	 @Id
	 @Pattern(message = "Invalid Card Number", regexp = "\\d{16}$")
     private String customercardnumber;
	 
	 @Pattern(message="Invalid date", regexp="^(0[1-9]|1[0-2])\\/[0-9]{2}$")
     private String customervalidthru;
     
     @Pattern(message = "Invalid CVV ", regexp = "\\d{3}$")
     private String customercvv;
      
     @Column(nullable=false)
     private Integer customeraccountbalance;
     
     @Column(nullable=false)
     @Pattern(message="Please enter valid pin",regexp="\\d{4}$")
     private String pin;

     @OneToOne(cascade = CascadeType.ALL)
     @JoinColumn(name="customerid")
     private Customer customer;
     
     
	public CustomerCardDetails() {
		super();
	}
	public CustomerCardDetails(String customercardnumber, String customervalidthru, String customercvv,
			Integer customeraccountbalance,String pin) {
		super();
		this.customercardnumber = customercardnumber;
		this.customervalidthru = customervalidthru;
		this.customercvv = customercvv;
		this.customeraccountbalance = customeraccountbalance;
		this.pin=pin;
	}
	public String getCustomercardnumber() {
		return customercardnumber;
	}
	public void setCustomercardnumber(String customercardnumber) {
		this.customercardnumber = customercardnumber;
	}
	public String getCustomervalidthru() {
		return customervalidthru;
	}
	public void setCustomervalidthru(String customervalidthru) {
		this.customervalidthru = customervalidthru;
	}
	public String getCustomercvv() {
		return customercvv;
	}
	public void setCustomercvv(String customercvv) {
		this.customercvv = customercvv;
	}
	public Integer getCustomeraccountbalance() {
		return customeraccountbalance;
	}
	public void setCustomeraccountbalance(Integer customeraccountbalance) {
		this.customeraccountbalance = customeraccountbalance;
	}
	
	
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	
	@Override
	public String toString() {
		return "CustomerCardDetails [customercardnumber=" + customercardnumber + ", customervalidthru="
				+ customervalidthru + ", customercvv=" + customercvv + ", customeraccountbalance="
				+ customeraccountbalance + ", pin=" + pin + ", customer=" + customer + "]";
	}
	public void setCustomeridTocustomercarddetails(Customer cu) {
		this.customer=cu;
		
	}
	
    
     
}
