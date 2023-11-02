// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import auth from "../../firebase.init";

// const TeamMemberEdit = () => {
//   const navigate = useNavigate();
//   const [team, setTeam] = useState([]);
//   const [user] = useAuthState(auth);
//   const { id } = useParams();

//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");

//   useEffect(() => {
//     fetch(`http://localhost:5000/team/${id}`)
//       .then((res) => res.json())
//       .then((info) => setTeam(info));
//   }, [id]);

//   const updateTeam = (event) => {
//     event.preventDefault();

//     const personName = event.target.personName.value;
//     const personTitle = event.target.personTitle.value;
//     const facebook = event.target.facebook.value;
//     const twitter = event.target.twitter.value;
//     const personImg = event.target.personImg.value;

//     const team = {
//       personName,
//       personImg,
//       personTitle,
//       facebook,
//       twitter,
//     };

//     const url = `http://localhost:5000/team/${id}`;
//     fetch(url, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(team),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         navigate("/admin/setting-homepage/");
//       });
//   };
//   return (
//     <div
//       className="payment-setting"
//       data-aos="fade-up"
//       data-aos-duration={2000}
//     >
//       <form class="form" onSubmit={updateTeam}>
//         <div class="container">
//           <div class="justify-content-center align-items-baseline">
//             <div class="col-sm">
//               <label className="mt-1">Enter Person Name</label>
//               <div class="form-group mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Person Name"
//                   name="personName"
//                   defaultValue={team.personName}
//                 />
//               </div>
//             </div>
//             <div class="col-sm">
//               <label className="mt-1">Enter Person Title</label>
//               <div class="form-group mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Person Title"
//                   name="personTitle"
//                   defaultValue={team.personTitle}
//                 />
//               </div>
//             </div>
//             <div class="col-sm">
//               <label className="mt-1">Enter Person Image URL</label>
//               <div class="form-group mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Person Image URL"
//                   name="personImg"
//                   defaultValue={team.personImg}
//                 />
//               </div>
//             </div>

//             <div class="col-sm">
//               <label className="mt-1">Enter Facebook Link</label>
//               <div class="form-group mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Type Feature Two"
//                   name="facebook"
//                   defaultValue={team.facebook}
//                 />
//               </div>
//             </div>
//             <div class="col-sm">
//               <label className="mt-1">Enter Twitter Link</label>
//               <div class="form-group mb-3">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Type Feature Two"
//                   name="twitter"
//                   defaultValue={team.twitter}
//                 />
//               </div>
//             </div>

//             <div class="col-sm">
//               <button type="submit" class="action-btn">
//                 <span>Update Team Member</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TeamMemberEdit;
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import axios from "axios";

const TeamMemberEdit = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState([]);
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imgbbApiKey] = useState("1f8cc98e0f42a06989fb5e2589a9a8a4"); // Your imgbb API key

  useEffect(() => {
    fetch(`http://localhost:5000/team/${id}`)
      .then((res) => res.json())
      .then((info) => setTeam(info));
  }, [id]);

  const updateTeam = async (event) => {
    event.preventDefault();

    const personName = event.target.personName.value;
    const personTitle = event.target.personTitle.value;
    const facebook = event.target.facebook.value;
    const twitter = event.target.twitter.value;

    let personImg = team.personImg; // Use the existing image link by default

    // Check if a new image is being uploaded
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("key", imgbbApiKey);

        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );

        personImg = imgbbResponse.data.data.url;
      } catch (error) {
        console.error("Image upload to imgbb failed:", error);
        return; // Don't proceed if image upload fails
      }
    }

    const updatedTeam = {
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
      body: JSON.stringify(updatedTeam),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);

    const previewURL = URL.createObjectURL(selectedFile);
    setImagePreview(previewURL);
  };

  return (
    <div className="payment-setting" data-aos="fade-up" data-aos-duration={2000}>
      <form className="form" onSubmit={updateTeam}>
        <div className="container">
          <div className="justify-content-center align-items-baseline">
            <div className="col-sm">
              <label className="mt-1">Enter Person Name</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Person Name"
                  name="personName"
                  defaultValue={team.personName}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Person Title</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Person Title"
                  name="personTitle"
                  defaultValue={team.personTitle}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Upload or Enter New Image URL</label>
              <div className="form-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Images"
                  style={{ maxWidth: "100px" }}
                />
              )}
              {team.personImg && !imageFile && !imagePreview && (
                <img
                  src={team.personImg}
                  alt="Uploaded Image"
                  style={{ maxWidth: "100px" }}
                />
              )}
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Facebook Link</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Facebook Link"
                  name="facebook"
                  defaultValue={team.facebook}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Twitter Link</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Twitter Link"
                  name="twitter"
                  defaultValue={team.twitter}
                />
              </div>
            </div>

            <div className="col-sm">
              <button type="submit" className="action-btn">
                <span>Update Team Member</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeamMemberEdit;
