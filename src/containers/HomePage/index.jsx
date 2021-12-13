import React from "react";
import Banner from "containers/Banner";
import DishesList from "containers/DishesList";
import HowToOrder from "containers/HowToOrder";
import Popular from "containers/Popular";
import IntroCook from "containers/IntroCook";
import IntroApp from "containers/IntroApp";
import ClientsSaid from "containers/ClientsSaid";
import Article from "containers/Article";
import Cart from "containers/Cart";

import Header from "containers/Header";
import Footer from "containers/Footer";
import AppLayout from "components/AppLayout";
const Home = () => {
  return (
    <AppLayout>
      <Banner />
      <Popular />
      <HowToOrder />
      <IntroCook />
      <IntroApp />
      <ClientsSaid />
      <Article />

      <Cart />
    </AppLayout>
  );
};
export default Home;