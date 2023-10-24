import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BannerTwo = () => {
    const navigate = useNavigate()
    const [banners, setBanners] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/banner-two`)
          .then((res) => res.json())
          .then((info) => setBanners(info));
      }, []);

    const handleBannerTwo = (event) => {
        event.preventDefault();
        const bannerImageTwo = event.target.bannerImageTwo.value;

        const banner = { bannerImageTwo };
    
        const url = `http://localhost:5000/banner-two`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(banner),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/admin/dashboard");
          });
      };

    return (
        <div>
            {
                banners.filter(banner=> banner.bannerImageTwo).length === 0 &&
                <form onSubmit={handleBannerTwo}> 
                <input type='text' name='bannerImageTwo'></input>
                <input type='submit' value='Update'></input>
            </form>
            }
            {
                banners.filter(banner=> banner.bannerImageTwo).length === 1 &&
               <div>
                {banners.map( banner=>
                <Link to={`/admin/banner-two/${banner._id}`} className='btn'>Edit Now</Link> 
                    )}
               </div>
            }
           
            
        </div>
    );
};

export default BannerTwo;