import { Outlet } from "react-router-dom"; 
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Common = () => {
    return (
        <div >
             <ToastContainer />
             <Navbar></Navbar> 
             <Outlet></Outlet>
             <div className="min-h-1">  </div>
             <Footer></Footer>
        </div>
    );
};

export default Common;