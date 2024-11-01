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

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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

        List<Transactions> transactionObject = trxService.fetchTransactions("completed");
        if(transactionObject.isEmpty()){
            transactionObject = new ArrayList<>();
        }

        // Calculate the total amount of transactions as a String
        String totalTransactions = String.valueOf(transactionObject.stream()
                .mapToDouble(transaction -> Double.parseDouble(transaction.getAmount()))
                .sum());


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
        String transactionId = UUID.randomUUID().toString();
        ResponseEntity<String> response = paymentService.sendPaymentRequest(amount, "USD", transactionId);

        // Parse the JSON response to extract the URL
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response.getBody());
        String url = jsonNode.path("result").path("url").asText();

        //extract api data for processing.
        String extractedAmount = jsonNode.path("result").path("amount").asText();
        String createdOn = jsonNode.path("result").path("created_at").asText();
        String updatedOn = jsonNode.path("result").path("updated_at").asText();
        OffsetDateTime parseUpdatedOn = OffsetDateTime.parse(updatedOn);
        OffsetDateTime parsedCreatedOn = OffsetDateTime.parse(createdOn);
        String transactionReference = jsonNode.path("result").path("order_id").asText();
        String currency = jsonNode.path("result").path("currency").asText();

        //save to the transaction model before redirecting to the actual page.
        trxService.saveTransactionRecord(
                extractedAmount, parsedCreatedOn.toLocalDateTime(), parseUpdatedOn.toLocalDateTime(),"pending",transactionReference,
                Email,donorName,"Crypto",currency,"donation"

        );

        // Redirect the user to the payment URL
        return new RedirectView(url);
    }

    /*
    *After successful payment, the user can click on the button on the payment form
    * and return to this URL.
    */
    @GetMapping("/success-callback")
    @ResponseBody
    public String[] successCallback(){

        return new String[]{"payment callback was clicked"};
    }

    /*
    * Before paying, the user can click on the button on the payment form
    * and return to the store page at this URL.
    * */
    @GetMapping("/return-callback")
    @ResponseBody
    public String[] returnCallback(){

        return new String[]{"payment callback was clicked"};
    }

    /*
    * Url to which webhooks with payment status will be sent
    * */
    @GetMapping("/url-callback")
    @ResponseBody
    public String urlCallback(){
        return UUID.randomUUID().toString();
    }
}
