import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomepageSectionThree = () => {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/sections-three/`)
      .then((res) => res.json())
      .then((info) => setSections(info));
  }, []);

  const handleSectionThree = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;
    const sectionThree = event.target.sectionThree.value;
    const setSection = event.target.setSection.value;

    const section = {
      Category,
      sectionThree,
      setSection
    };

    const url = `http://localhost:5000/section-three`;
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

  const handleSectionThreeForRecentProducts = (event) => {
    event.preventDefault();
    const recentProducts = event.target.recentProducts.value;
    

    const sectionForRecentProducts = {
      recentProducts
    };

    const url = `http://localhost:5000/section-three`;
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
          <form onSubmit={handleSectionThree}>
            <input
              hidden
              value="sectionThree"
              type="text"
              name="sectionThree"
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

          <form onSubmit={handleSectionThreeForRecentProducts}>
            <input
              hidden
              type="text"
              value="recentProducts"
              name="setSection"
            ></input>
            <input type="submit" value="Show Recent Products"></input>
          </form>
        </div>
      )}

      {sections.filter((section) => section.Category).length === 1 && (
        <div>
          {sections.map((section) => (
            <Link
              className="btn"
              to={`/admin/homepagesection-three/${section._id}`}
            >
              You Have Selected {section.Category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomepageSectionThree;
