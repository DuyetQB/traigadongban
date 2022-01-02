import React from "react";
import Banner from "containers/Banner";
import HowToOrder from "containers/HowToOrder";
import { Popular } from "containers/Popular";
import ClientsSaid from "containers/ClientsSaid";
import Article from "containers/Article";
import Cart from "containers/Cart";

import AppLayout from "components/AppLayout";
const Home = () => {
  return (
    <AppLayout>
      <Banner />
      <Popular />
      <HowToOrder />
      <Article />
      <Cart />
    </AppLayout>
  );
};
export default Home;
