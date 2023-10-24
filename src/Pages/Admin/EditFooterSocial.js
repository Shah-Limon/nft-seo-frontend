import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFooterSocial = () => {
  const [footerSocial, setFooterSocial] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, [footerSocial]);

  const handleFooterSocial = (event) => {
    event.preventDefault();
    const facebook = event.target.facebook.value;
    const youtube = event.target.youtube.value;
    const twitter = event.target.twitter.value;

    const footerSocial = {
      facebook,
      youtube,
      twitter,
    };

    const url = `http://localhost:5000/footer-social/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(footerSocial),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard/");
      });
  };

  return (
    <div>
      <h2>Social Setting</h2>

      <form onSubmit={handleFooterSocial}>
        <input
          type="text"
          name="facebook"
          defaultValue={footerSocial.facebook}
        ></input>
        <br></br>
        <input
          type="text"
          name="youtube"
          defaultValue={footerSocial.youtube}
        ></input>
        <br></br>
        <input
          type="text"
          name="twitter"
          defaultValue={footerSocial.twitter}
        ></input>
        <br></br>

        <input type="submit" value="Update"></input>
      </form>
    </div>
  );
};

export default EditFooterSocial;
