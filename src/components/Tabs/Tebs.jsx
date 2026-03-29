import React from 'react';

const Tebs = ({ tab, setTab }) => {
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent gap-3">
                <input onClick={()=> setTab(true)}  type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${tab && 'bg-[#fb2c36] text-white font-bold'}`} aria-label="Models"  />

                <input onClick={()=> setTab(false)} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full ${tab || 'bg-[#fb2c36] text-white' } font-bold`} aria-label="Cart" />
            </div>
        </div>
    );
};

export default Tebs;