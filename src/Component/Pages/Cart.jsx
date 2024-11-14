import { useState,useEffect } from "react";
import { FaSort } from "react-icons/fa6";  
import Cartsingle from "./Cartsingle";
import { getcart } from "../../utils/cart";
import {  toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
const Cart = () => {
    const [price,setPrice]=useState(0);
    const [data,setData]= useState([]) 
    useEffect(()=>{
        const fav=getcart();
        setData(fav);
             const sum = fav.reduce((acc, item) => acc + item.price, 0);
        setPrice(sum);

    },[]) 
    const handlesort = () => {
        const sorted = [...data].sort((a, b) => b.price - a.price);
        setData(sorted);
    };
    const handlePurchase = () => {

        if (data.length === 0) {
            toast.warn('Cart is empty!', {
                position: "top-center",
                autoClose: 5000,
            });}
            else{
                toast.success('Purchased successful', {
                    position: "top-center",
                    autoClose: 5000, 
                    });
                setPrice(0);   
                setData([]);   
                localStorage.removeItem('favorite'); 
                 Navigate("/");

            }
          
    };
    
    return (
        <div className="max-w-6xl mx-auto my-12">
            <div className="flex justify-between">
            <div className="pt-3 text-3xl font-semibold">Cart</div>
             <div className="flex space-x-6">
                <p className="font-semibold">Totalcost:{price}  </p>
                <h1 onClick={handlesort} className="flex border border-purple-800 text-purple-600 rounded-lg p-2 btn">Sort by price<FaSort></FaSort> </h1>
                <button onClick={handlePurchase} className="bg-purple-700 text-white px-2 rounded-lg">Purchase</button>
             </div>
            </div>

            <div>
                {data.length > 0 ? (
                    data.map((cardinfo, idx) => <Cartsingle key={idx} value={cardinfo} />)
                ) : (
                    <div className="text-center text-gray-500 text-xl font-semibold mt-10">
                        Cart is empty
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;