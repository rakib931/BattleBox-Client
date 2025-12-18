import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const PaymentSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axios.post(`${import.meta.env.VITE_API_URL}/payments-success`, {
        sessionId,
      });
    }
  }, [sessionId]);
  return (
    <div>
      <h1 className="text-4xl font-semibold">Payment Success</h1>
    </div>
  );
};

export default PaymentSuccess;
