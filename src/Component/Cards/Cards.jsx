import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
    const valu1= useLoaderData();
    console.log(valu1);
    const {category} = useParams();
    console.log(category);
    return (
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             {
                valu1.map( (cardinfo,idx) =><Card key={idx} cardinfo={cardinfo} ></Card>)
             }
        </div>
    );
};

export default Cards;