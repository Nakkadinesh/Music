package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.BookingDao;
import com.model.Booking;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BookingController {
	@Autowired
	BookingDao bookingDao;
	
	@GetMapping("getBookings")
	public List<Booking>getBookings(){
		return bookingDao.getBookings();
	}
	@GetMapping("getBookingById/{bookingId}")
	public Booking getBookingById(@PathVariable int bookingId){
	return bookingDao.getBookingById(bookingId);
    }
	@PostMapping("addBooking")
	public Booking addBooking(@RequestBody Booking booking){
		return bookingDao.addBooking(booking);
	}
	@DeleteMapping("deleteBookingById/{bookingId}")
	public String deleteBookingById(@PathVariable int bookingId){
		bookingDao.deleteBookingById(bookingId);
		return "Booking with bookingId:"+bookingId+"Deleted successfully";
	}
		
	}
