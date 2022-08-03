// rfce
import React from "react";
import "./home.css";
import Product from "./product";

import ScrollToTopBtn from "./ScrollToTopBtn";
function Home() {
  

  return (
    <div className="home">
      
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="100000"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />

          <Product
            id="100001"
            title="Boat Rockerz 425 Bluetooth Wireless Over Ear Headphones with Mic"
            price={12.01}
            image="https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164_960_720.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="100002"
            title='"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={2}
          />

          <Product
            id="100003"
            title='Fitness Band Smart Watch, 1.69" 43mm Fulltouch Fitness Tracker IP68 Waterproof'
            price={45.9}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />

          <Product
            id="100004"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric"
            price={32.15}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="100005"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={200.01}
            image="https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876__340.jpg"
            rating={4}
          />
        </div>
      </div>
      <ScrollToTopBtn />
    </div>
  );
}

export default Home;
