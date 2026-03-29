import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModeCard = ({ model,addAi,setAddAi }) => {
    const [sebs, setSubs] = useState(false)
    const addCard = () => {
        if(!addAi.find(ai=> ai.id === model.id)){
            setAddAi([...addAi, model])
            setSubs(true)
            
            toast.success(`successfully added ${model.title} for $ ${model.price} Dollar`)
        }
        else if(addAi.find(ai=> ai.id === model.id)){
            toast.error("Item already in cart!")
        }
    }
    return (
        <div className='card shadow'>
            <div className="flex justify-center items-center  bg-[#e4e4e7] rounded-lg w-full h-60">
                <img className='w-25 hover:w-28' src={model.image} alt="" />
            </div>
            <div className="card-body">
                <h1 className='card-title text-2xl font-bold'>{model.title}</h1>
                <p className='text-[#9f9fa9]'>{model.description}</p>
                <h1 className='text-[#9f9fa9]'><span className='font-bold text-4xl text-black'>{model.price > 0 ? "$" + model.price : "Free"}</span  >/Month</h1>
                <button onClick={addCard} className='btn bg-[#e7000b] text-white h-15 text-lg mt-5 rounded-2xl'>{sebs ? "Subscribed" : 'SubsCribe Now'}</button>
            </div>
        </div>
    );
};

export default ModeCard;