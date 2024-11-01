package com.codedwebltd.charitypillar.Repository;

import com.codedwebltd.charitypillar.Models.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Long> {

    public List<Transactions> findByStatus(String status);
    

}
