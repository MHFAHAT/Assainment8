
import { Outlet, useLoaderData } from "react-router-dom";

import img from '../../assets/img/banner.jpg'
import Banner from "../Banner/Banner";
import Diffcata from "../Catagory/Diffcata";



const Home = () => {
    const value = useLoaderData();
    // console.log(value.category);
    return (
        <div>
            <div>
                <div className='relative'>
                    <div><Banner text1={'Upgrade Your Tech Accessorize with'} text2={'Gadget Heaven Accessories'} para={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner></div>
                    <div className='absolute left-1/2 transform -translate-x-1/2 top-[330px]'> <img className='h-[450px] w-[1062px] rounded-3xl' src={img} alt="" /></div>
                </div>
            </div>
            <div className="mt-[280px]">
                <div>
                    <h1 className="font-bold text-3xl text-center pb-14 ">Explore Cutting-Edge Gadgets</h1>
                </div>
                <div className="flex">
                    <div className="flex w-2/12 justify-center">
                        <Diffcata categories={value}></Diffcata>
                    </div>
                    <div className="w-10/12">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;