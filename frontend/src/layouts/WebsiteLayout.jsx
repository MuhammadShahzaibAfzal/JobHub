import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const WebsiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default WebsiteLayout;
