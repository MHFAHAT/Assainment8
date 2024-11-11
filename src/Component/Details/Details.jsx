import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { addcard, gettheval } from "../../utils/indes";
import { add } from "../../utils/cart";



const Details = () => {
    
    const { id } = useParams();
    const data = useLoaderData();
    const [gadet, Setgadet] = useState({});
    const [disable,Setdisabled]=useState(false)
    const [disabl,Setdisable]=useState(false)
    useEffect(() => {  
        const single = data.find(item => item.product_id === parseInt(id))
        Setgadet(single);

        // const fav = gettheval()
        // const isexist =fav.find(item=> item.product_id == single.product_id  )
        // if(isexist)
        // {
        //     Setdisabled(true)
        // }
    }, [data, id])

    const { product_title, product_image, price, product_id, category, description, Specification, availability, rating
    } = gadet;
    const handlecard= (gadet) =>{
        addcard(gadet); 
        Setdisabled(true);
    }
    const handlecart = (gadet)=>{ 
            add(gadet); 
            Setdisable(true);
         

    }

    const firstExample = {
        size: 30,
        value:rating ,
        edit: false
      };
    return (
        <div className="relative mb-[300px]">
            <Banner text1={"Product Details"} text2={" "} para={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Banner>


            <div className="hero bg-base-200 h-[500px] rounded-lg  max-w-5xl mx-auto absolute top-52 left-[250px]">
                <div className="flex">  
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-2xl " />
                    <div className="pl-3 space-y-1">
                        <h1 className="font-semibold text-2xl ">Samsung Galaxy S23 Ultra</h1>
                        <p>Price:${price}</p>
                        <div className="badge badge-primary badge-outline">In Stock</div>
                        <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h1 className="text-black font-semibold">Specification:</h1>
                        <ul className="list-disc list-inside">
                            {Specification && Specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                            <p className="font-semibold flex">Reating:<IoIosStarHalf></IoIosStarHalf></p>
                            <ReactStars {...firstExample} />
                        <div className="flex gap-3">

                        <button disabled = {disabl} onClick={()=>handlecart(gadet)} className="btn bg-purple-600 flex justify-start w-[140px] py-[11px} px-[22px]">Get Started<BsCart3></BsCart3></button>
                         
                           <button 
                           disabled = {disable}
                           onClick={()=>handlecard(gadet)} className="btn border border-black p-4 rounded-full ">
                           <FaRegHeart   ></FaRegHeart>
                           </button>
                       
                            
                         
                        </div> 
                    </div>
                   
                </div>
                
            </div>
                

        </div>
    );
};

export default Details;