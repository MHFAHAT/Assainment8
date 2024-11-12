import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
    const valu1 = useLoaderData(); 
    const { category } = useParams(); 
    const [indicard, Setindicard] = useState([])
    useEffect(() => {
        if (category) {
            const newdata = [...valu1].filter(
                gadget => gadget.category === category)
            Setindicard(newdata);
        }
        else {
            Setindicard(valu1.slice(0,9));
        }
    }, [valu1, category])
    return (
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {
                indicard.map((cardinfo, idx) => <Card key={idx} cardinfo={cardinfo} ></Card>)
            }
        </div>
    );
};

export default Cards;