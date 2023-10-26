import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const TeamMemberEdit = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState([]);
  const [user] = useAuthState(auth);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/team/${id}`)
      .then((res) => res.json())
      .then((info) => setTeam(info));
  }, [id]);

  const updateTeam = (event) => {
    event.preventDefault();

    const personName = event.target.personName.value;
    const personTitle = event.target.personTitle.value;
    const personImg = event.target.personImg.value;
    const facebook = event.target.facebook.value;
    const twitter = event.target.twitter.value;

    const team = {
      personName,
      personImg,
      personTitle,
      facebook,
      twitter,
    };

    const url = `http://localhost:5000/team/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(team),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };
  return (
    <>
      <form class="form" onSubmit={updateTeam}>
      <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Person Name</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Name"
                  name="personName"
                  defaultValue={team.personName}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Person Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Title"
                  name="personTitle"
                  defaultValue={team.personTitle}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Person Image URL</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Image URL"
                  name="personImg"
                  defaultValue={team.personImg}
                  
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Facebook Link</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Two"
                  name="facebook"
                  defaultValue={team.facebook}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Twitter Link</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Two"
                  name="twitter"
                  defaultValue={team.twitter}
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Update Team Member</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TeamMemberEdit;
