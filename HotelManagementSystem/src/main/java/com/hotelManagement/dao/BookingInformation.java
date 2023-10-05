package com.hotelManagement.dao;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Future;
import javax.validation.constraints.FutureOrPresent;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="bookinginformation")
public class BookingInformation 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bookingid;

	@Column(nullable=false)
	private Date checkindate;
	

	@Column(nullable=false)
	private Date checkoutdate;

	@Column(nullable=false)
	private Double totalamount; 
	
	//OneToOne relation

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customerid")
	private Customer customer;
	
	//OneToOne relation

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="hotelid")
	private HotelInformation hotelinformation;

	//OneToOne relation

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="roomid")
	private RoomInformation roominformation;
	
	public BookingInformation() {
		super();
	}
	
	public BookingInformation(Date checkindate, Date checkoutdate, Double totalamount, String paymentstatus) {
		super();
		this.checkindate = checkindate;
		this.checkoutdate = checkoutdate;
		this.totalamount = totalamount;
		
	}
	
	public Integer getBookingid() {
		return bookingid;
	}
	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}
	public Date getCheckindate() {
		return checkindate;
	}
	public void setCheckindate(Date checkindate) {
		this.checkindate = checkindate;
	}
	public Date getCheckoutdate() {
		return checkoutdate;
	}
	public void setCheckoutdate(Date checkoutdate) {
		this.checkoutdate = checkoutdate;
	}
	public Double getTotalamount() {
		return totalamount;
	}
	public void setTotalamount(Double totalamount) {
		this.totalamount = totalamount;
	}
	
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public HotelInformation getHotelinformation() {
		return hotelinformation;
	}
	public void setHotelinformation(HotelInformation hotelinformation) {
		this.hotelinformation = hotelinformation;
	}
	
	
	public RoomInformation getRoominformation() {
		return roominformation;
	}
	public void setRoominformation(RoomInformation roominformation) {
		this.roominformation = roominformation;
	}
	
	@Override
	public String toString() {
		return "BookingInformation [bookingid=" + bookingid + ", checkindate=" + checkindate + ", checkoutdate="
				+ checkoutdate + ", totalamount=" + totalamount + "]";
	}
	
}