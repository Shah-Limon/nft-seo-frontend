import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFooterAbout = () => {
  const [footerAbout, setFooterAbout] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/footer-about/${id}`)
      .then((res) => res.json())
      .then((info) => setFooterAbout(info));
  }, [id]);

  const handleFooterAboutEdit = (event) => {
    event.preventDefault();
    const websiteName = event.target.websiteName.value;
    const aboutUs = event.target.aboutUs.value;

    const footerAboutEdit = {
      websiteName,
      aboutUs,
    };

    const url = `http://localhost:5000/footer-about/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(footerAboutEdit),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard/");
      });
  };

  return (
    <div>
      <h2>About Us Setting</h2>
      
        <form onSubmit={handleFooterAboutEdit}>
          <input
            type="text"
            name="websiteName"
            defaultValue={footerAbout.websiteName}
          ></input>
          <br></br>
          <textarea
            className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="aboutUs"
            defaultValue={footerAbout.aboutUs}
            placeholder="Write About"
          ></textarea>
          <br></br>
          <input type="submit" value="Update"></input>
        </form>
    </div>
  );
};

export default EditFooterAbout;
