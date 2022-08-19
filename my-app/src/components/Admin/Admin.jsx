import "./admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import SiderBar from "./SiderBar";

const Admin = (props) => {
  const [collapsed, setCollpased] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SiderBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollpased(!collapsed)} />
        contentgoes here
      </div>
    </div>
  );
};

export default Admin;
