import { NavLink } from "react-router-dom";

 




const Card = ({ cardinfo }) => {
    const { product_title,product_image,price,product_id} = cardinfo || {};
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className=" ">
                    <img  
                        src= {product_image}
                        alt=" "
                        className=" h-40 rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold">{product_title}</h2>
                     <p className="text-gray-500">Price:{price}k</p>
                    <div className="card-actions">
                    <NavLink to={`/details/${product_id}`} className="btn btn-outline btn-primary">ViewDetails</NavLink> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;