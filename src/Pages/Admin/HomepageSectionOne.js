import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomepageSectionOne = () => {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/sections-one/`)
      .then((res) => res.json())
      .then((info) => setSections(info));
  }, []);

  const handleSectionOneForCategory = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;
    const sectionOne = event.target.sectionOne.value;

    const section = {
      Category,
      sectionOne,
    };

    const url = `http://localhost:5000/section-one`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(section),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard");
      });
  };
  
  const handleSectionOneForRecentProducts = (event) => {
    event.preventDefault();
    const recentProducts = event.target.recentProducts.value;
    

    const sectionForRecentProducts = {
      recentProducts
    };

    const url = `http://localhost:5000/section-one`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sectionForRecentProducts),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard");
      });
  };



  return (
    <div>
      {sections.filter((section) => section.Category).length === 0 && (
       <div>
         <form onSubmit={handleSectionOneForCategory}>
          <input
            hidden
            value="sectionOne"
            type="text"
            name="sectionOne"
          ></input>
          <input
            hidden
            value="Category"
            type="text"
            name="setSection"
          ></input>
          <select name="Category">
            <option disabled selected>
              Select a category
            </option>
            {categories.map((category) => (
              <option>{category.Category}</option>
            ))}
          </select>
          <input type="submit" value="Update"></input>
        </form>
        <div className="divider">OR</div>

        <form onSubmit={handleSectionOneForRecentProducts}>
        <input hidden type='text' value='recentProducts' name='setSection'></input>
          <input type='submit' value='Show Recent Products'></input>
        </form>

       </div>
        
      )}
      

{sections.filter((section) => section.Category).length === 1 && (
        <div>
        {sections.map(section => 
        <Link className="btn" to={`/admin/homepagesection-one/${section._id}`}>You Have Selected {section.Category}</Link>
            )}
        </div>
      )}


    </div>
  );
};

export default HomepageSectionOne;
