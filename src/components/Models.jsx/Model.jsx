import React, { use } from 'react';
import ModeCard from './ModeCard';

const Model = ({ data, setAddAi, addAi }) => {
    const useData = use(data)

    return (
        <div className="">
            <h1 className='mt-15 font-bold text-5xl text-center'>Choose Your AI Model</h1>
            <p className='text-gray-400 text-center text-lg mt-5'>One subscription gives you access to all frontier AI models</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 2xl:grid-cols-4 mt-10'>
                {
                    useData.map(model => <ModeCard model={model} key={model.id} setAddAi={setAddAi} addAi={addAi}></ModeCard>)
                }
            </div>
            <p className='text-center text-lg text-gray-500 my-16 text-sm'>All models are available under one powerful subscription • Cancel anytime</p>
        </div>
    );
};

export default Model;