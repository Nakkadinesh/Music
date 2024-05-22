package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String amount;
    private String name;
    private String transactionId;  // Changed to transactionId to match the convention

    public Booking() {
        super();
    }

    public Booking(String name, String amount) {
        super();
        this.name = name;
        this.amount = amount;
        this.transactionId = generateTransactionId();
    }

    private String generateTransactionId() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        return sdf.format(new Date());
    }

    @PrePersist
    public void prePersist() {
        if (this.transactionId == null) {
            this.transactionId = generateTransactionId();
        }
    }

    @Override
    public String toString() {
        return "Booking [name=" + name + ", emailId=" + emailId + ", amount=" + amount + ", transactionId=" + transactionId + "]";
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }
}