import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { userService } from "../services/user.service";

const stripePromise = loadStripe("pk_test_f3duw0VsAEM2TJFMtWQ90QAT");

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    try {
      const response = await userService.postPayment();
      const data = response.data;
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    createPaymentIntent();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutPage;
