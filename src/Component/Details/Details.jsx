import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";




const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [gadet, Setgadet] = useState({});
    useEffect(() => {

        const single = data.find(item => item.product_id === parseInt(id))
        Setgadet(single);

    }, [data, id])
    const { product_title, product_image, price, product_id, category, description, Specification, availability, rating
    } = gadet;
    return (
        <div>
            <Banner text1={"Product Details"} text2={" "} para={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Banner>


            <div className="hero bg-base-200 h-[567px] rounded-lg  max-w-5xl mx-auto ">
                <div className="flex"> 
                {/* flex-col lg:flex-row */}
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-2xl " />
                    <div className="pl-3">
                        <h1>Samsung Galaxy S23 Ultra</h1>
                        <p>Price:{price}k</p>
                        <div className="badge badge-primary badge-outline">In Stock</div>
                        <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h1>Specification:</h1>
                        {/* <ul>
                         {Specification}
                     </ul> */}
                        <p>Rating</p>
                        <div className="flex flex-col">

                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <div className="flex gap-3">

                        <button className="btn bg-purple-600 flex justify-start w-[140px] py-[11px} px-[22px]">Get Started<BsCart3></BsCart3></button>
                        <div className=" border p-4 border-black rounded-full" >

                        <FaRegHeart ></FaRegHeart>
                        </div>
                        </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
                

        </div>
    );
};

export default Details;