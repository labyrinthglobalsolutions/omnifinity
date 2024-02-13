import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrTasks, GrUser } from "react-icons/gr";
import { IoLogOut } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";

import { useEffect, useState } from "react";

import "./adminpanel.css";
import { useNavigate } from "react-router-dom";
import AllBanners from "./allBanners";
import AddBanner from "./addBanner";
import AddService from "./services/addService";
import AllServices from "./services/getServices";

function AdminPannel() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [active, setActive] = useState("allBanners");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("token");
    navigate("/adminLogin");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Sidebar
        className="sidebar-container"
        backgroundColor="#ced4da"
        collapsed={isCollapsed}
        collapsedWidth="60px"
      >
        <Menu
          className="sidebar-icons-container"
          menuItemStyles={{
            button: {
              "&.active": {
                backgroundColor: "#0f5298",
                color: "#b6c8d9",
              },
              "&:hover": {
                width: "90%",
                marginLeft: "5px",
                marginBottom: "5px",
                marginTop: "5px",
                borderRadius: "10px",
                backgroundColor: "#293b51", // Background color on hover
                color: "#F0F0F0 ", // Text color on hover
              },
            },
          }}
        >
          <div className="hamburger-icon">
            <GiHamburgerMenu onClick={() => setIsCollapsed(!isCollapsed)} />
          </div>

          <MenuItem
            icon={<GrTasks />}
            onClick={() => setActive("allBanners")}
            className={active === "allBanners" ? "menu-active" : ""}
          >
            All Banners
          </MenuItem>
          <MenuItem
            icon={<MdAddTask />}
            onClick={() => setActive("addBanner")}
            className={active === "addBanner" ? "menu-active" : ""}
          >
            Add Banner
          </MenuItem>
          <MenuItem
            icon={<MdAddTask />}
            onClick={() => setActive("addService")}
            className={active === "addService" ? "menu-active" : ""}
          >
            Add Service
          </MenuItem>
          <MenuItem
            icon={<MdAddTask />}
            onClick={() => setActive("allServices")}
            className={active === "allServices" ? "menu-active" : ""}
          >
            All Services
          </MenuItem>

          <MenuItem icon={<IoLogOut />} onClick={handleLogout}>
            LogOut
          </MenuItem>
        </Menu>
      </Sidebar>
      <div style={{ width: "100%" }}>
        {active === "allBanners" && <AllBanners />}
        {active === "addBanner" && <AddBanner />}
        {active === "addService" && <AddService />}
        {active === "allServices" && <AllServices />}
      </div>
    </div>
  );
}

export default AdminPannel;
