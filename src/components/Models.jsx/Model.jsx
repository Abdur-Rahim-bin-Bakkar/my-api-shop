import React, { use } from 'react';
import ModeCard from './ModeCard';

const Model = ({data}) => {
    const useData = use(data)
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 2xl:grid-cols-4'>
            {
                useData.map(model=> <ModeCard model={model} key={model.id}></ModeCard>)
            }
        </div>
    );
};

export default Model;