package com.codedwebltd.charitypillar.Services;

import com.codedwebltd.charitypillar.Models.Transactions;
import com.codedwebltd.charitypillar.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    TransactionRepository trxRepo;

    public List<Transactions> fetchTransactions(String status){


        List<Transactions> findTrx = trxRepo.findByStatus(status);
        if(findTrx.isEmpty()){
            findTrx = Collections.emptyList();
        }
        return findTrx;
    }


    public void saveTransactionRecord(String amount,
                                      LocalDateTime createdOn, LocalDateTime updatedOn,
                                      String status, String transactionReference, String Email,
                                      String donorName, String paymentMethod, String currency,
                                      String purpose
                                      ){
        Transactions transaction = new Transactions();
        transaction.setAmount(amount);
        transaction.setCreatedOn(createdOn);
        transaction.setUpdatedOn(updatedOn);
        transaction.setStatus(status);
        transaction.setTransactionReference(transactionReference);
        transaction.setEmail(Email);
        transaction.setDonorName(donorName);
        transaction.setPaymentMethod(paymentMethod);
        transaction.setCurrency(currency);
        transaction.setPurpose(purpose);
        trxRepo.save(transaction);

    }


}
