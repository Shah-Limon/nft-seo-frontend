import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/HomePage/AboutUs";
import OurSpeciality from "../components/HomePage/OurSpeciality";
import Portfolio from "../components/HomePage/Portfolio";
import Project from "../components/HomePage/Project";
import RoadMap from "../components/HomePage/RoadMap";
import Team from "../components/HomePage/Team";
import Testimonials from "../components/HomePage/Testimonials";
import Faqs from "../components/HomePage/Faqs";
import Create from "../components/HomePage/Create";
import Pricing from "../components/HomePage/Pricing";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurSpeciality></OurSpeciality>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Project></Project>
      <RoadMap></RoadMap>
      <Team></Team>
      <Testimonials></Testimonials>
      <Faqs></Faqs>
     
     
    </div>
  );
};

export default Home;
