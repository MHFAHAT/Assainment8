import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
  

const Diffcata = ({categories}) => {
    // console.log(categories)
    return (
        <div className="max-w-6xl mx-auto  py-20">
            
            <div className=" flex  bg-purple-200 p-3 rounded-lg ">
            <div className="grid grid-cols-1 gap-4 ">
            {categories.map(category => (<NavLink   key={category.category} 
                            to={`/cards/${category.category}`} 
                            className={({ isActive }) => 
                                isActive 
                                    ? "bg-purple-500 text-white p-2 rounded" 
                                    : "text-black p-2 rounded"
                            } >{category.category}</NavLink>))}
            </div>
            </div> 
        </div>
    );
};
Diffcata.propTypes = {
    categories: PropTypes.string.isRequired,  
}
export default Diffcata;