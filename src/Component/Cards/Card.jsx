

 

const Card = ({cardinfo}) => {
   const {product_title,product_image,category,price,description,Specification,availability,rating}  = cardinfo;
    return (
        <div>
            <div>{product_title}</div>
        </div>
    );
};

export default Card;