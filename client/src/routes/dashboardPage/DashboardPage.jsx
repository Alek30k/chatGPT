import { Outlet } from "react-router-dom";
import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboardpage">
      <div className="menu">Menu</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
