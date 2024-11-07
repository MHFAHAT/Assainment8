import img from '../../assets/img/banner.jpg'

const Bannerpic = () => {
    return (
        <div >
            <img className='h-[450px] w-[1062px] rounded-3xl' src={img} alt="" />
        </div>
    );
};

export default Bannerpic;