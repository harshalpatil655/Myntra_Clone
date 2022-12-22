import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          style={{ width: "92%", margin: "auto" }}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/1439d458-3f9b-4a49-830c-a47a126bb9311647456798699-Roadster_Desk_Banner.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "92%", margin: "auto" }}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/28/4ac3be4b-f02c-4106-8dc9-be1898a81def1648463267842-Desktop-Banner-----1920x504.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ width: "92%", margin: "auto" }}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/8f1a79c7-3f11-4608-9f31-30a03a606cb41647537798522-SS22-DesktopBanners-Unisex.jpg"
          alt="ee"
        />
      </div>
      <div>
        <img
          style={{ width: "92%", margin: "auto" }}
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/52df3f93-8d0f-412d-b416-fc665706199d1647456798690-Casual-Shoes_Dk.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default MySlider;
