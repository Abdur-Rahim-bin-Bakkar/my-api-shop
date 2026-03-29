import React, { useState } from 'react';
import Card from './Card';
import { ImFilesEmpty } from 'react-icons/im';

const MyCard = ({addAi, setAddAi}) => {
      console.log(addAi)
    //   const [totals, setTot] = useState(0)
      const total = addAi.reduce((sum, ini)=>{
        return sum + ini.price
      },0)
    return (
        <div className='p-5'>
            <h1 className='font-bold  text-6xl my-5'>Your Card</h1>
            {
               addAi.length>0 &&  
               addAi.map(ai=>{
                // setTot(totals + ai.price)
                return(
                    
                     <Card key={ai.id} data={ai} addAi={addAi} setAddAi={setAddAi} /> 
                   
                )
               })
            }
            {
                addAi.length > 0 && 
                <div className='space-y-4 mt-5'>
                    <div className="card flex-row justify-between bg-black text-white font-bold p-6 m-5 rounded-2xl ">
                        <h1 className='text-3xl'>Total</h1>
                        <h1  className='text-3xl'>$ {total}</h1>
                    </div>
                    <div className="card  bg-[#e7000b] text-white font-bold p-6 m-5 rounded-2xl ">
                        <h1 className='text-3xl text-center' onClick={()=> setAddAi([])}>Product to Checkout</h1>
                        
                    </div>
                </div>
            }
            {
                addAi.length === 0 &&
                <div className='mt-5'>
                    <ImFilesEmpty className='text-7xl mx-auto m'></ImFilesEmpty>
                    <h1 className='font-bold text-center text-2xl my-10 text-gray-500'>Your cart is empty</h1>
                </div> 
            }
        </div>
    );
};

export default MyCard;