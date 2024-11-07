import { Outlet } from "react-router-dom"; 
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

 

const Common = () => {
    return (
        <div >
             <Navbar></Navbar>
              
             <Outlet></Outlet>
             <div className="min-h-[calc(100vh-430px)]">  </div>
             <Footer></Footer>
        </div>
    );
};

export default Common;