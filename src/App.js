import React, { useEffect } from "react";
import "./App.css";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //this will only run once when the appcomponent loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ',authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/login">
            <Login /> 
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/">
          <Header />
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
