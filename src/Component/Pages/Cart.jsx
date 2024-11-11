import { useState,useEffect } from "react";
import { FaSort } from "react-icons/fa6";  
import Cartsingle from "./Cartsingle";
import { getcart } from "../../utils/cart";
const Cart = () => {
    // const [price,setPrice]=useState(0);
    const [data,setData]= useState([])
    useEffect(()=>{
        const fav=getcart();
        setData(fav);


    },[])
    return (
        <div className="max-w-6xl mx-auto my-12">
            <div className="flex justify-between">
            <div className="pt-3 text-3xl font-semibold">Cart</div>
             <div className="flex space-x-6">
                <p className="font-semibold">Totalcost:  </p>
                <h1 className="flex border border-purple-800 text-purple-600 rounded-lg p-2">Sort by price<FaSort></FaSort> </h1>
                <button className="bg-purple-700 text-white px-2 rounded-lg">Purchase</button>
             </div>
            </div>

            <div>
            {
                 data.map((cardinfo, idx) => <Cartsingle key={idx} value={cardinfo} ></Cartsingle> )
             }
            </div>
        </div>
    );
};

export default Cart;