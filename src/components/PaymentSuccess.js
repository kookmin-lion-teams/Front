import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);

  const paymentKey = query.get("paymentKey");
  const orderId = query.get("orderId");
  const amount = query.get("amount");

  return (
    <div>
      <h1>결제 성공</h1>
      <p>Payment Key: {paymentKey}</p>
      <p>Order ID: {orderId}</p>
      <p>Amount: {amount}</p>
    </div>
  );
};

export default PaymentSuccess;
