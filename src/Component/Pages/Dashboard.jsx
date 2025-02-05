import { NavLink, Outlet } from "react-router-dom"; 

 
 
 const Dashboard = () => {
    return (
        <div>
              <div className="bg-purple-500 text-white text-center space-y-5 py-6">
                <h1 className="font-semibold text-4xl">Dashboard</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. </p>
                <p>From smart devices to the coolest accessories, we have it all!</p>

                <div className="space-x-3">
                    <NavLink className={({ isActive }) =>
                                    isActive
                                        ? "bg-purple-700 text-white btn p-2 rounded"
                                        : "text-black bg-white btn p-2 rounded"
                                } to='/dashboard/cart' >Cart</NavLink>
                    <NavLink 
                    className={({ isActive }) =>
                      isActive
                          ? "bg-purple-700 text-white btn p-2 rounded"
                          : "text-black bg-white btn p-2 rounded"
                  } 
                    to='/dashboard/whishlist'  >Wishlist</NavLink>
                </div>
              </div>
              <Outlet></Outlet>
        </div>
    );
 };
 
 export default Dashboard;