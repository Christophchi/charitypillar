package com.codedwebltd.charitypillar.Services;

import com.codedwebltd.charitypillar.Models.Transactions;
import com.codedwebltd.charitypillar.Repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    TransactionRepository trxRepo;

    public List<Transactions> fetchTransactions(){

        List<Transactions> findTrx = trxRepo.findAll();
        if(findTrx.isEmpty()){
            findTrx = Collections.emptyList();
        }
        return findTrx;
    }

    public void checkClassS(){


    }


}
