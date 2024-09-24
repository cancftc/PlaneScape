import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <div className="header">
        <div className="header-wrapper">
          <div className="header-right">
            <Link className="icon" to="/">
              <i className="fa-solid fa-plane"></i>
              PLANE SCAPE
            </Link>
          </div>
          <div className="header-href">
            <Link className="link" to="/">
              <i className="fa-solid fa-tag"></i>
              Deals
            </Link>
            <Link className="link" to="/">
              <i className="fa-solid fa-earth-americas"></i>
              Discover
            </Link>
            <Link className="link" to="/my-flights">
              <i className="fa-solid fa-ticket"></i>
              My flights
            </Link>
            <Link className="link" to="/">
              <img
                className="profile-img"
                src="data:image/jpeg;base64,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"
              />
              Jone Smith
            </Link>
          </div>
          <i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
        </div>
      </div>
      <div className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
        <i
          onClick={toggleSidebar}
          className="fa-regular fa-circle-xmark xmark"
        ></i>
        <Link className="link sidebar-link" to="/my-flights">
          <i className="fa-solid fa-ticket"></i>
          My flights
        </Link>
        <Link className="link sidebar-link" to="/">
              <i className="fa-solid fa-tag"></i>
              Deals
            </Link>
            <Link className="link sidebar-link" to="/">
              <i className="fa-solid fa-earth-americas"></i>
              Discover
            </Link>
      </div>
    </div>
  );
}

export default Navbar;
