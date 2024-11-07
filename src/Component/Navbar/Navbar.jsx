import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
 

const Navbar = () => {
    const location = useLocation();
    const navbarBgClass = (location.pathname === "/stat" || location.pathname === "/dashboard")
        ? "bg-white text-black"
        : "bg-purple-500";
    return (
        <div className="relative">
            <div className=" bg-purple-500 rounded-lg max-w-7xl mx-auto ">
                <div className={`navbar  ${navbarBgClass} rounded-lg max-w-7xl mx-auto mt-3 text-white`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/stat">Statistics</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/stat">Statistics</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <a className="btn"><BsCart3 ></BsCart3>  </a>
                        <a className="btn"><FaRegHeart></FaRegHeart> </a>
                    </div>

                </div> 
            </div>
             
        </div>
    );
};

export default Navbar;