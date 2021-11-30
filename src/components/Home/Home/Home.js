import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Main from "../Main/Main/Main";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
