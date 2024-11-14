import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


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

                {HOME.pathname === '/' && (
                    <NavLink to='/dashboard' className="btn bg-white rounded-lg text-purple-500">Shop now</NavLink>
                )}
                 
            </div>

        </div>

    );
};
Banner.propTypes = {
    text1: PropTypes.string.isRequired, 
    text2: PropTypes.string.isRequired, 
    para: PropTypes.string.isRequired,  
}
export default Banner;