import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomeSectionThreeEdit = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [section, setSection] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/section-three/${id}`)
      .then((res) => res.json())
      .then((info) => setSection(info));
  }, [id]);

  const handleSectionThreeEdit = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;
    const setSection = event.target.setSection.value;
    const setSectionForCategory = { Category, setSection };

    const url = `http://localhost:5000/section-three-edit/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(setSectionForCategory),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate(`/admin/dashboard`);
      });
  };
 
  const handleSectionThreeForRecentProductsEdit = (event) => {
    event.preventDefault();
    const setSection = event.target.setSection.value;
    const setSectionForRecentProducts = { setSection };

    const url = `http://localhost:5000/section-three-edit-recent-products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(setSectionForRecentProducts),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate(`/admin/dashboard`);
      });
  };

  return (
    <div>
        <form onSubmit={handleSectionThreeEdit}>
          <input hidden type='text' value='Category' name='setSection'></input>
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
        <form onSubmit={handleSectionThreeForRecentProductsEdit}>
          <input hidden type='text' value='recentProducts' name='setSection'></input>
          <input type='submit' value='Show Recent Products'></input>
        </form>

    </div>
  );
};

export default HomeSectionThreeEdit;
