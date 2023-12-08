import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex justify-center p-10">
      <Link to="/" className="logo">
        <span className="uppercase text-left">Career at</span>
        <img src={logo} alt="logo" className="w-[174px] h-[80px]" />
      </Link>
    </nav>
  );
};

export default Navbar;
