package com.codedwebltd.charitypillar.Repository;

import com.codedwebltd.charitypillar.Models.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Long> {

}
