import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SpecialityOptionEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [about, setAbout] = useState([]);

  const handleEditAbout = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const title = event.target.title.value;
    const subText = event.target.subText.value;
    const btnText = event.target.btnText.value;
    const btnUrl = event.target.btnUrl.value;

    const updateAbout = {
      img,
      title,
      subText,
      btnText,
      btnUrl,
    };

    const url = `http://localhost:5000/edit-about/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAbout),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/report-sent");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, [id]);

  return (
    <>
      <form onSubmit={handleEditAbout}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Banner Image Url</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Image Url"
                  name="img"
                  defaultValue={about.img}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Banner Title"
                  name="title"
                  defaultValue={about.title}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner About Text</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Sub Text"
                  name="subText"
                  defaultValue={about.subText}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner Button Text</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Button Text"
                  name="btnText"
                  defaultValue={about.btnText}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Banner Button URL</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Button URL"
                  name="btnUrl"
                  defaultValue={about.btnUrl}
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Update About</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SpecialityOptionEdit;
