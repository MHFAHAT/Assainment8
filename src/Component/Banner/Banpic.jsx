 
import Banner from './Banner';
import Bannerpic from './Bannerpic';
 
 const Banpic = () => {
    return (
        <div className='relative'>
            <div><Banner text1={'Upgrade Your Tech Accessorize with'} text2={'Gadget Heaven Accessories'} para={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner></div>
            <div className='absolute left-1/2 transform -translate-x-1/2 top-[330px]'><Bannerpic></Bannerpic></div>
        </div>
    );
 };
 
 export default Banpic;