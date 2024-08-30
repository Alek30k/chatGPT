import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
          <span>ALE IA</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
