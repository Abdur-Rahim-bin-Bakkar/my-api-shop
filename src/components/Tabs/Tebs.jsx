import React from 'react';

const Tebs = () => {
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent gap-3">
                <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Tab 1" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Tab 2"  />
            </div>
        </div>
    );
};

export default Tebs;