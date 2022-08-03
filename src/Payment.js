import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./stateProvider";
import { Link, useHistory } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
            Checkout (
                <Link to="/checkout">{basket?.length} items</Link>
            )
        </h1>
        {/* Payment Section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>41A Ajay Nagar</p>
            <p>Deopur, Dhule</p>
          </div>
        </div>

        {/* Payment Section - Review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Section - Payment Method */}
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
                {/* Stripe magic here */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
