import React from "react";
import "./checkout.css";
import { useStateValue } from "./stateProvider";
import Subtotal from "./subtotal";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
         <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

         
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

      {/* Right Side */}
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;