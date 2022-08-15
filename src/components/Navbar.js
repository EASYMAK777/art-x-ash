import React from "react";
import Nav from "react-bootstrap/Nav";
import facebook from "../img/facebook-icon.png";
import instagram from "../img/instagram.png";
import pinetrest from "../img/pinetrest.png";
import tiktok from "../img/tiktok.jpg";
import "../components/Navbar.css";
export default function Navbar() {
  return (
    <Nav
      className="nav_bar"
      activeKey="/home"
      //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="header_logo">
        <Nav.Link href="/home">
          <h1>ART-X-ASH</h1>
        </Nav.Link>
      </Nav.Item>
      {/* ONLINE GALLERY PAGE LINK */}
      <Nav.Item className="gallery_link">
        <Nav.Link eventKey="link-1">Online Gallery</Nav.Link>
      </Nav.Item>
      {/* LINK SECTION */}
      <Nav.Item className="logo_panel">
        {/* FACEBOOK LINK */}
        <Nav.Item>
          <Nav.Link href="http://pinetrest.com" className="logo">
            <img
              src={pinetrest}
              alt="pinetrest-icon"
              className="pinetrest_icon"
              width={25}
              height={25}
            ></img>
          </Nav.Link>
        </Nav.Item>
        {/* INSTAGRAM LINK */}
        <Nav.Item>
          <Nav.Link href="http://facebook.com" className="logo">
            <img
              src={facebook}
              alt="facebook-logo"
              className="facebook_icon"
              width={25}
              height={25}
            ></img>
          </Nav.Link>
        </Nav.Item>
        {/* PINETREST LINK */}
        <Nav.Item>
          <Nav.Link href="http://instagram.com" className="logo">
            <img
              src={instagram}
              alt="instagram-logo"
              className="instagram_icon"
              width={25}
              height={25}
            ></img>
          </Nav.Link>
        </Nav.Item>
        {/* TIKTOK LINKS */}
        <Nav.Item>
          <Nav.Link href="http://tiktok.com" className="logo">
            <img
              src={tiktok}
              alt="tiktok-logo"
              className="tiktok_icon"
              width={25}
              height={25}
            ></img>
          </Nav.Link>
        </Nav.Item>
      </Nav.Item>
    </Nav>
  );
}

// <nav className="nav">
//   <a href="/" className="site-title">
//     ART-X-ASH
//   </a>
//   <ul className="nav_list">
//     <li className="nav_list_item">
//       <a href="/gallery" className="galleryLink">
//         <p>Online Gallery</p>
//       </a>
//       <a href="https://facebook.com">
//         <img src={facebook} className="image" alt="facebook"></img>
//       </a>
//       <a href="https://instagram.com">
//         <img src={instagram} className="image" alt="instagram"></img>
//       </a>
//       <a href="https://pineterest.com">
//         <img src={pineterest} className="image" alt="pineterest.com"></img>
//       </a>
//       <a href="https://tiktok.com">
//         <img src={tiktok} className="image" alt="tiktok"></img>
//       </a>
//     </li>
//   </ul>
// </nav>
