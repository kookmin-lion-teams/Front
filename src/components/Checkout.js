import React from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";

const PaymentButton = () => {
  const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY;
  const originUrl = process.env.REACT_APP_ORIGIN_URL;

  // 클라이언트 키와 URL을 로그로 확인합니다.
  console.log("Client Key:", clientKey);
  console.log("Origin URL:", originUrl);

  const payment = () => {
    // TossPayments 로드
    if (!clientKey) {
      console.error("클라이언트 키가 설정되지 않았습니다.");
      return;
    }

    loadTossPayments(clientKey)
      .then((tossPayments) => {
        tossPayments
          .requestPayment("카드", {
            amount: 10000,
            orderId: "order_123456",
            orderName: "상품 이름",
            customerName: "주문자 이름",
            successUrl: `${originUrl}/success`,
            failUrl: `${originUrl}/fail`,
          })
          .catch((error) => {
            if (error.code === "USER_CANCEL") {
              console.error("사용자가 결제를 취소했습니다.", error);
            } else if (error.code === "INVALID_CARD_COMPANY") {
              console.error("유효하지 않은 카드입니다.", error);
            } else {
              console.error("결제 과정에서 오류가 발생했습니다.", error);
            }
          });
      })
      .catch((error) => {
        console.error("TossPayments 로딩 중 오류가 발생했습니다.", error);
      });
  };

  return <button onClick={payment}>결제하기</button>;
};

export default PaymentButton;
