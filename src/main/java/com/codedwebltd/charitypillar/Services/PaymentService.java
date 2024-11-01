package com.codedwebltd.charitypillar.Services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentService {

    private static final String API_KEY = "hQeEXVNf8mAU29Pdkdnfv66BmfCMVYitZajtpPNKZIXI36W7FG6MEwddvQ7Gedh1tfZ8VhcglTaaPbgsD5SGYIx1FaEOx4pO9BOR6nmgGIz6M3dCjghi87VTf7avo5hj";
    private static final String MERCHANT_ID = "30edd75f-44f5-465d-9cd7-1a6a24de9409";
    private static final String URL = "https://api.cryptomus.com/v1/payment";

    private final RestTemplate restTemplate;

    public PaymentService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public ResponseEntity<String> sendPaymentRequest(String amount, String currency, String orderId) throws JsonProcessingException {
        // Prepare the data for the API request
        Map<String, Object> data = new HashMap<>();
        data.put("amount", amount);
        data.put("currency", currency);
        data.put("order_id", orderId);

        // Generate the sign
        String jsonData = new ObjectMapper().writeValueAsString(data); // Convert data to JSON
        String sign = generateSignature(jsonData);

        // Set headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("merchant", MERCHANT_ID);
        headers.set("sign", sign);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(data, headers);

        // Send the request
        return restTemplate.postForEntity(URL, request, String.class);
    }

    private String generateSignature(String jsonData) {
        try {
            String base64Json = Base64.getEncoder().encodeToString(jsonData.getBytes(StandardCharsets.UTF_8));
            return DigestUtils.md5DigestAsHex((base64Json + API_KEY).getBytes());
        } catch (Exception e) {
            throw new RuntimeException("Error generating signature", e);
        }
    }
}

