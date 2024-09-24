import { Outlet } from "react-router-dom";
import "./layout.css";
import Navbar from "./nabvar/navbar";

function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
