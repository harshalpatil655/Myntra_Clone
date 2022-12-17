import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import "../CSS/Footer.css";
const Footer = () => {
  return (
    <div className="footermain">
      <div className="footer">
        <div className="footone">
          <h1 className="fooh1">ONLINE SHOPPING</h1>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home&Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider</p>
        </div>
        <div className="foottwo">
          <h1 className="fooh1">ONLINE SHOPPING</h1>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home&Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider</p>
        </div>
        <div className="footthree">
          <h1 className="fooh1">EXPERIENCE MYNTRA APP ON MOBILE</h1>
          <img
            className="playimg"
            src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
            alt="Googleplay"
          />
          <img
            className="playimg"
            src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
            alt="AppStore"
          />
          <h1 className="fooh1">KEEP IN TOUCH</h1>
          <div>
            <BsFacebook style={{ marginLeft: "10px" }} size={25} />
            <BsTwitter style={{ marginLeft: "10px" }} size={25} />
            <BsYoutube style={{ marginLeft: "10px" }} size={25} />
            <BsInstagram style={{ marginLeft: "10px" }} size={25} />
          </div>
        </div>
        <div>
          <h1 className="fooh1">Useful Links</h1>
          <p>Blog</p>
          <p>Careers</p>
          <p>Site Map</p>
          <p>Corporate Information</p>
          <p>Whitehat</p>
        </div>
      </div>
      <div className="address">
        <h1 className="fooh1">Registered Office Address</h1>
        <p>Buildings Alyssa,</p>
        <p>Begonia and Clover situated in Embassy Tech Village,</p>
        <p>Outer Ring Road,</p>
        <p>Devarabeesanahalli Village,</p>
        <p>Varthur Hobli,</p>
        <p>Bengaluru – 560103, India</p>
      </div>
      <div className="footerdown">
        @2022 www.myntra.com. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
