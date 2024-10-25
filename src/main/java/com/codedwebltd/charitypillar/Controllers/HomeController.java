package com.codedwebltd.charitypillar.Controllers;

import com.codedwebltd.charitypillar.Models.Transactions;
import com.codedwebltd.charitypillar.Services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @Autowired
    TransactionService trxService;

    @Value("${spring.application.name}")
    protected String appName;

    @Value("${donation.projected.amount}")
    protected String projectedAmount;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("title", "CHARITY PILLAR VERBOSE");
        model.addAttribute("application_name", appName);
        model.addAttribute("projectedAmount", projectedAmount);

        List<Transactions> transactions = trxService.fetchTransactions();
        if(transactions.isEmpty()){
            transactions = new ArrayList<>();
        }

        // Calculate the total amount of transactions
        Long totalTransactions = transactions.stream()
                .mapToLong(Transactions::getAmount)
                .sum();

        model.addAttribute("transactions", transactions);
        model.addAttribute("totalTransactions", totalTransactions);

        return "home/index"; // Ensure this points to the correct file
    }
}
