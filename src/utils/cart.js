import {  toast } from 'react-toastify';
const getcart=()=>{
    const all = localStorage.getItem('favorite')
     
    if(all)
    {
       const favorites =JSON.parse(all) 
         console.log(favorites)
       return favorites
    }
    else
    { console.log([])
       return[] 

    }


}

const add = card =>{
    const fav = getcart();
    const exist =fav.find(item=> item.product_id == card.product_id  )
     if(exist) return toast.warn('Alreday added as Cart')
    fav.push(card)
    localStorage.setItem('favorite',(JSON.stringify(fav)))  
    toast.success('Successfully added to cart', {
     position: "top-center",
     autoClose: 5000, 
     });

}
export {add,getcart}