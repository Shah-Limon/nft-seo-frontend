import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BannerTwoEdit = () => {
    const [banner, setbanner] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:5000/banner-two/${id}`)
          .then((res) => res.json())
          .then((info) => setbanner(info));
      }, [id]);

      const handleBannerTwoEdit = (event) => {
        event.preventDefault();
        const bannerImageTwo = event.target.bannerImageTwo.value;
        const bannerTwoEdit = { bannerImageTwo };
    
        const url = `http://localhost:5000/banner-two-edit/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(bannerTwoEdit),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate(`/admin/dashboard`);
          });
      };
     

    return (
        <div>
              
                <form onSubmit={handleBannerTwoEdit}> 
                <input defaultValue={banner.bannerImageTwo} type='text' name='bannerImageTwo'></input>
                <input type='submit' value='Update'></input>
            </form>
            
        </div>
    );
};

export default BannerTwoEdit;