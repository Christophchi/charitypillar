package com.codedwebltd.charitypillar.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Entity
@Table(name = "transactions")

public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //amount starts
    @Column(name = "amount", nullable = false)
    private Long amount;

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
    //amount ends


    @Column(name = "created_on", nullable = false)
    private LocalDateTime createdOn;

    @Column(name = "updated_on")
    private LocalDateTime updatedOn;

    @Column(name = "status", length = 50, nullable = false)
    private String status; // Example values: "pending", "completed", "failed"

    @Column(name = "transaction_reference", unique = true)
    private String transactionReference;

    @Column(name = "donor_email")
    private String donorEmail;

    @Column(name = "donor_name")
    private String donorName;

    @Column(name = "payment_method", length = 50)
    private String paymentMethod; // Example values: "card", "paypal", etc.

    @Column(name = "currency", length = 10, nullable = false)
    private String currency;

    @Column(name = "purpose", length = 255)
    private String purpose; // What the donation is for

}
