import { Link } from "react-router-dom";
import Logo from "../assets/Logo.JPG";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-6 font-medium flex-wrap">

  
      <div className="text-2xl font-bold text-[#10b985]">
        <Link to='/'>
        <img className="w-[100px]" src={Logo} />
        </Link>
       
      </div>

    
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6">
          <li className="hover:text-[#0a956b]"><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/asanas">Asanas</a></li>
          {/* <li><a href="/settings">Settings</a></li> */}
        </ul>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="ml-4 pl-4 pr-4 py-2 border border-gray-300 rounded-lg text-sm bg-white w-40"
          />
        </form>
      </div>

    
      <div className="hidden md:flex items-center gap-4">
        <Link to="/login">
         <button className="border border-[#71e5be] px-4 py-2 rounded hover:bg-[#e5faf3]">
          Sign-In
        </button>
        </Link>
        <button className="bg-[#10b985] px-4 py-2 rounded text-white font-semibold">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

export default Navbar;
