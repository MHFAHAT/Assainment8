import { useLocation } from "react-router-dom";



const Banner = ({ text1, text2, para }) => {
    const HOME = useLocation();
    const hclass =   (HOME.pathname === "/stat" || HOME.pathname === "/dashboard")
    ? " h-[129px]"
    : "h-[550px] max-w-7xl mx-auto";
    return (
               
        <div className={`pt-12 text-center text-white bg-purple-500 rounded-lg   ${hclass} `}>
            <div className="">
                <h1 className="text-6xl font-bold">{text1}</h1>
                <h1 className="text-6xl font-bold">{text2}</h1>
                <p className="py-6">
                    {para}
                </p>

                {HOME.pathname === '/home' && (
                    <button className="btn bg-white rounded-lg text-purple-500">Shop now</button>
                )}
                 
            </div>

        </div>

    );
};

export default Banner;