package com.hotelManagement.service;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.hotelManagement.dao.BookingInformation;
import com.hotelManagement.dao.Customer;
import com.hotelManagement.dao.HotelInformation;
import com.hotelManagement.dao.RoomInformation;
import com.hotelManagement.error.GlobalException;
import com.hotelManagement.repository.BookingInformationRepository;
import com.hotelManagement.repository.CustomerRepository;
import com.hotelManagement.repository.HotelInformationRepository;
import com.hotelManagement.repository.RoomInformationRepository;

@Service
public class BookingInformationServiceImpl implements BookingInformationService 
{

	@Autowired
	private BookingInformationRepository bookingInformationRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private HotelInformationRepository hotelInformationRepository;
	
	@Autowired
	private RoomInformationRepository roomInformationRepository; 
	
	@Autowired private JavaMailSender javaMailSender; 
	
	@Override
	public BookingInformation addBookingInformation(BookingInformation bookingInformation) {
		return bookingInformationRepository.save(bookingInformation);
	}
	@Override
	public void sendThankYouEmail(String customeremail) 
	{

		MimeMessage mimeMessage=javaMailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(mimeMessage);
		try {
			helper.setTo(customeremail);
			helper.setSubject("Thank you for booking...");
			String htmlMsg="Dear Customer Thank You for Booking with us.<br><h3>Note: Please carry your any ID prooof while checking-in </h3><br>";
			helper.setText(htmlMsg, true);
			//helper.setText("Dear customer thank you for registering with us...");
			
			javaMailSender.send(mimeMessage);
		} catch (MessagingException e) {
			e.printStackTrace();
			
		}
	}
	@Override
	public BookingInformation setHotelAdminidAndHotelid(Integer bookingid, Integer customerid, Integer hotelid,
			Integer roomid) throws GlobalException {
		BookingInformation bookingInformation=bookingInformationRepository.findById(bookingid).orElse(null);
		Customer customer=customerRepository.findById(customerid).orElse(null);
		HotelInformation hotelInformation=hotelInformationRepository.findById(hotelid).orElse(null);
		RoomInformation roomInformation=roomInformationRepository.findById(roomid).orElse(null);
		sendThankYouEmail(customer.getCustomeremail());
		
		if(bookingInformation !=null && customer!=null && hotelInformation!=null && roomInformation!=null) {
		
			bookingInformation.setCustomer(customer);
		    bookingInformation.setHotelinformation(hotelInformation);
		    bookingInformation.setRoominformation(roomInformation);
			return bookingInformationRepository.save(bookingInformation) ;
	}else {
		throw new GlobalException("one or more entities not found ");
	}
	
	}
	@Override
	public BookingInformation getBookingInformationById(Integer bookingid) throws GlobalException {
		Optional<BookingInformation> bi=bookingInformationRepository.findById(bookingid);
		BookingInformation bi1=null;
		if(!bi.isPresent()) {
			throw new GlobalException("Booking information with id "+bookingid+" not found");
		}
		bi1=bookingInformationRepository.findById(bookingid).get();
		return bi1;
	}
	@Override
	public void deleteBookingInformationById(Integer bookingid) throws GlobalException {
		Optional<BookingInformation> bi=bookingInformationRepository.findById(bookingid);
		BookingInformation bi1=null;
		if(!bi.isPresent()) {
			throw new GlobalException("Booking information with id "+bookingid+" not found");
		}
		bookingInformationRepository.deleteById(bookingid);
	}
	@Override
	public List<BookingInformation> getAllBookingInformation() {
		return bookingInformationRepository.findAll();
	}
	@Override
	public List<BookingInformation> getBookingInformationByPaymentastatus(String paymentstatus) {
		return bookingInformationRepository.findBookingInfoByPaymentStatus(paymentstatus);
	}
	@Override
	public List<BookingInformation> getSuccessfulPaymentStatus() {
		return bookingInformationRepository.findSuccessfulPayment();
	}
	@Override
	public List<BookingInformation> getPendingPaymentStatus() {
		return bookingInformationRepository.findPendingPayment();
	}
	
	@Override
	public BookingInformation updateBookingInformationById(Integer bookingid, BookingInformation bookingInformation) {
		return null;
	}
	@Override
	public List<BookingInformation> getAllBookingInformationByHotelId(Integer hotelid) {
		return bookingInformationRepository.findAllByHotelId(hotelid);
	}
	@Override
	public List<BookingInformation> getAllBookingInformationByCustomerId(Integer customerid) {
		return bookingInformationRepository.findAllByCustomerId(customerid);
	}
}