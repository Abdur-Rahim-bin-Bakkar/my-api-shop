import React from 'react';
import hero from '../../assets/banner.png'

const Hero = () => {
    return (
        <div className="hero  min-h-screen max-w-[1150px] mx-auto">
            <div className="hero-content flex-col-reverse lg:flex-row">

                <div className='flex-1 p-5'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img
                    src={hero}
                    className="max-w-sm rounded-lg  flex-1"
                />
            </div>
        </div>
    );
};

export default Hero;