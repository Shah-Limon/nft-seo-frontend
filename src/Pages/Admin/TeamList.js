import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
const TeamList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState([]);
  const [title, setTitle] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/teams`)
      .then((res) => res.json())
      .then((info) => setTeam(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  let rowNumber = 1;

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

    const url = `http://localhost:5000/add-team`;
    fetch(url, {
      method: "POST",
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
    <div>
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
      <div class="container">
        <div class="justify-content-center align-items-baseline">
          <div class="col-sm">
            {title.map((e) => (
              <Link
                to={`/admin/edit-team-title/${e._id}`}
                type="submit"
                class="action-btn"
              >
                <span>Update Team Section Title</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      )
      <div className="container">
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Team Person Name</th>

              <th>Edit</th>
            </tr>
            {team.map((item) => (
              <tr key={item._id}>
                <td>{rowNumber++}</td>
                <td>{item.personName}</td>
                <td data-th="Edit">
                  <Link to={`/admin/team-edit/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamList;
