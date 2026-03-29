import React from 'react';
import { BiX } from 'react-icons/bi';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const Card = ({ data, addAi, setAddAi }) => {
    const filterFun = ()=>{
        setAddAi(addAi.filter(ai=> ai.id !== data.id))
        toast.warning("Delete a AI card")
    }
    return (
        <div className='card p-4 m-5 bg-[#f4f4f5] flex-row items-center justify-between rounded-2xl border hover:border-error '>
            <div className="">
                <img src={data.image} className='w-25' alt="" />
            </div>
            <div className="mx-4">

                <h1 className='font-bold text-2xl '>{data.title} </h1>
                <p className='max-w-50 line-clamp-2'>{data.description}</p>
            </div>
            <div className="mx-4">

                <h1 className='font-bold text-2xl '>${data.price} </h1>
                <p className=''>per month</p>
            </div>

            <RiDeleteBack2Fill onClick={filterFun} className='text-2xl'></RiDeleteBack2Fill>
            
        </div>
    );
};

export default Card;