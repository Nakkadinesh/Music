package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking , Integer> {
@Query("from Booking where transactionaId =:transactionaId")
Booking findBytransactionaId(@Param("transactionaId") String transactionaId);
}
