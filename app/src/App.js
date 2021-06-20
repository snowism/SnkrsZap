/* eslint-disable react/jsx-no-undef */

import { Router } from "@reach/router";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Nike from "./components/Nike";
import Adidas from "./components/Adidas";
import Jordan from "./components/Jordan";
import ViewDetails from "./components/ViewDetails";
import UpdateCard from "./components/UpdateCard";

import Profile from "./components/Profile";
import Upload from "./components/Upload";

import Payment from "./components/Payment";
import OrderConfirm from "./components/OrderConfirm";

import SelectSize from "./components/SelectSize";

import "./App.css";
import "./scss/Card.scss";
import "./scss/Style.scss";
import "./scss/Form.scss";
import "./scss/Detailspage.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Wrapper path="/" />
        <ViewDetails path="/product-details" />
        <Nike path="/show-nike" />
        <Adidas path="/show-adidas" />
        <Jordan path="/show-jordan" />
        <UpdateCard path="update" />

        <Profile path="/user-profile" />
        <Upload path="/add-product" />

        <Payment path="/payment" />
        <OrderConfirm path="/order-confirm" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
