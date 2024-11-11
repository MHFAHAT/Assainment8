import {  toast } from 'react-toastify';
const gettheval=()=>{
    const all = localStorage.getItem('favorites')
     
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

const addcard =card => {
   const fav = gettheval();
   const exist =fav.find(item=> item.product_id == card.product_id  )
    if(exist) return toast.warn('Alreday added as favorates')
   fav.push(card)
   localStorage.setItem('favorites',(JSON.stringify(fav)))  
   toast.success('Successfully added to favoroutes', {
    position: "top-center",
    autoClose: 5000, 
    });
}

export {addcard,gettheval}