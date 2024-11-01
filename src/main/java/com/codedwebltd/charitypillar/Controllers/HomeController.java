package com.codedwebltd.charitypillar.Controllers;

import com.codedwebltd.charitypillar.Models.Transactions;
import com.codedwebltd.charitypillar.Services.PaymentService;
import com.codedwebltd.charitypillar.Services.TransactionService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @Autowired
    private final PaymentService paymentService;

    public HomeController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

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

        List<Transactions> transactionObject = trxService.fetchTransactions();
        if(transactionObject.isEmpty()){
            transactionObject = new ArrayList<>();
        }

        // Calculate the total amount of transactions
        Long totalTransactions = transactionObject.stream()
                .mapToLong(transaction -> Long.parseLong(transaction.getAmount()))
                .sum();


        model.addAttribute("transactionObject", transactionObject);
        model.addAttribute("totalTransactions", totalTransactions);

        Transactions transactions = new Transactions();
        model.addAttribute("transactions", transactions);

        return "home/index"; // Ensure this points to the correct file
    }



    @PostMapping("/processPayment")
    public RedirectView processPayment(@RequestParam("amount") String amount,
                                       @RequestParam("donorName") String donorName,
                                       @RequestParam("Email") String Email) throws JsonProcessingException
    {
        ResponseEntity<String> response = paymentService.sendPaymentRequest(amount, "USD", "10");

        // Parse the JSON response to extract the URL
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response.getBody());
        String url = jsonNode.path("result").path("url").asText();

        // Redirect the user to the payment URL
        return new RedirectView(url);
    }
}
