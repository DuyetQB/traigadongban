import React from "react";
import Banner from "containers/Banner";
import HowToOrder from "containers/HowToOrder";
import { Popular } from "containers/Popular";
import Article from "containers/Article";

import AppLayout from "components/AppLayout";
const Home = () => {
  return (
    <AppLayout>
      <Banner />
      <Popular />
      <HowToOrder />
      <Article />
    </AppLayout>
  );
};
export default Home;
