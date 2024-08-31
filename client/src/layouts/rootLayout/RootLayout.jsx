import { Link, Outlet } from "react-router-dom";
import "./rooLayout.css";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>ALE IA</span>
        </Link>
        <div className="user">user</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
