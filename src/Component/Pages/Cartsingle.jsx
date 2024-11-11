import { ImCross } from "react-icons/im";

const Cartsingle = ({value}) => {
    const { product_title, product_image, price, description } = value;
    return (
        <div>
            <div className="flex shadow-lg space-y-10 p-4 items-start">
            <div>
                <img className="h-[190px] w-[270px]" src={product_image} alt="" />
            </div>
            <div className="flex-grow ml-4">
                <h1 className="font-semibold">{product_title}</h1>
                <h1 className="font-semibold"> {description}</h1>
                <p>Price: ${price}</p>
                 
            </div>
            <div className="flex items-start">
                <ImCross className="cursor-pointer text-gray-500" />
            </div>
        </div>
        </div>
    );
};

export default Cartsingle;