import "./admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import SiderBar from "./SiderBar";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
  const [collapsed, setCollpased] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SiderBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars onClick={() => setCollpased(!collapsed)} />
        </div>

        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
