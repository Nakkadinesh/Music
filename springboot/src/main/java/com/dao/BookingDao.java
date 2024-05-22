package com.dao;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Booking;

@Service
public class BookingDao {
	
@Autowired
BookingRepository bookingRepository;

public List<Booking>getBookings(){
	return bookingRepository.findAll();
}
public Booking getBookingById(int bookingId) {
	return bookingRepository.findById(bookingId).orElse(null);
}
public Booking addBooking(Booking booking) {
	return bookingRepository.save(booking);
}
public void deleteBookingById(int bookingId) {
	bookingRepository.deleteById(bookingId);
}
}
