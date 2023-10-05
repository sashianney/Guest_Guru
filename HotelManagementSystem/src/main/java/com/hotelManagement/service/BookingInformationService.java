package com.hotelManagement.service;

import java.util.List;

import com.hotelManagement.dao.BookingInformation;
import com.hotelManagement.error.GlobalException;

public interface BookingInformationService {

	public BookingInformation addBookingInformation(BookingInformation bookingInformation);

	public BookingInformation setHotelAdminidAndHotelid(Integer bookingid, Integer customerid, Integer hotelid,
			Integer roomid) throws GlobalException;

	public BookingInformation getBookingInformationById(Integer bookingid) throws GlobalException;

	public void deleteBookingInformationById(Integer bookingid) throws GlobalException;

	public List<BookingInformation> getAllBookingInformation();

	public List<BookingInformation> getBookingInformationByPaymentastatus(String paymentstatus);

	public List<BookingInformation> getSuccessfulPaymentStatus();

	public List<BookingInformation> getPendingPaymentStatus();

	

	public BookingInformation updateBookingInformationById(Integer bookingid, BookingInformation bookingInformation);

	public List<BookingInformation> getAllBookingInformationByHotelId(Integer hotelid);

	void sendThankYouEmail(String customeremail);

	public List<BookingInformation> getAllBookingInformationByCustomerId(Integer customerid);

}
