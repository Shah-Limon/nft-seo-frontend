import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);

  const handleAddCategory = (event) => {
    event.preventDefault();
    const Category = event.target.Category.value;

    const newCategory = { Category };

    const url = `http://localhost:5000/add-category`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/categories");
      });
  };

  return (
    <div>
      <form className="new-category" onSubmit={handleAddCategory}>
        <input
          type="text"
          placeholder="New category name"
          name="Category"
        ></input>
        <input type="submit" className="btn ml-5" value="Add New"></input>
      </form>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {categories.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>
                  <div
                    className="tooltip"
                    data-tip={`Products: ${
                      categories.filter((c) => c.Category === category.Category)
                        .length
                    }`}
                  >
                    {category.Category}
                  </div>
                </td>
                <td>
                  <Link to={`/admin/edit-category/${category._id}`}>Edit</Link>{" "}
                  / <Link>Delete</Link>
                </td>
              </tr>
            ))} */}
            {categories.map((category, index) => {
              return (
                <tr key={category._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div
                      className="tooltip"
                      data-tip={`${category.Category} Products: {categories.filter(category => category.orderStatus === 'Pending').length}`}
                    >
                      {category.Category}
                    </div>
                  </td>
                  <td>
                    <Link to={`/admin/edit-category/${category._id}`}>
                      Edit
                    </Link>{" "}
                    / <Link>Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
