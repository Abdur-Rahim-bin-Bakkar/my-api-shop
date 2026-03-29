import React from 'react';
import Card from './Card';

const MyCard = ({addAi, setAddAi}) => {
      console.log(addAi)
    return (
        <div className='p-5'>
            <h1 className='font-bold  text-6xl my-5'>Your Card</h1>
            {
               addAi.length>0 &&  
               addAi.map(ai=>{
                return(
                     <Card key={ai.id} data={ai} addAi={addAi} setAddAi={setAddAi} /> 
                )
               })
            }
            {
                addAi.length === 0 &&
                <div>
                    <h1 className='font-bold text-center text-2xl my-25 text-gray-500'>Your cart is empty</h1>
                </div> 
            }
        </div>
    );
};

export default MyCard;