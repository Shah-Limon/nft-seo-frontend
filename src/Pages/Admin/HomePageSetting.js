import React from "react";
import { Link } from "react-router-dom";

const HomePageSetting = () => {
  return (
    <div>
      <h2>Product Setting</h2>
      <div className="container mx-auto items-center">
        <Link to="/admin/section-one" className="btn">
          Setup Homepage Section One
        </Link>{" "}
        <br></br>
        <Link to="/admin/section-two" className="btn mt-5">
          Setup Homepage Section Two
        </Link>{" "}
        <br></br>
        <Link to="/admin/section-three" className="btn mt-5">
          Setup Homepage Section Three
        </Link>{" "}
        <br></br>
      </div>

      <h2>Homepage Image Setting</h2>
    <div className="container mx-auto items-center">
    <Link className="btn" to='/admin/top-banner'>Top Banner Setting</Link> <br></br> 
    <Link className="btn" to='/admin/banner-one'>Banner One</Link> <br></br> 
    <Link className="btn mt-5" to='/admin/banner-two'>Banner Two</Link>
      
    </div>


    </div>
  );
};

export default HomePageSetting;
