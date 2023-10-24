import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SectionSetting = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [section, setSection] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/section/${id}`)
      .then((res) => res.json())
      .then((info) => setSection(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  const handleSectionSetting = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;

    const sectionSetting = { Category} ;

    const url = `http://localhost:5000/section-update/${section._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sectionSetting),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard");
      });
  };

  return (
    <div className="container mx-auto items-center">
      <h2>Your are updating {section.SectionName}</h2>
      <form onSubmit={handleSectionSetting}>
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
    </div>
  );
};

export default SectionSetting;
