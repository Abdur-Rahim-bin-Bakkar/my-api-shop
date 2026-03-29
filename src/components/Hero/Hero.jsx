import React from 'react';
import hero from '../../assets/banner.png'
import { BiRightArrow } from 'react-icons/bi';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className="hero  min-h-screen max-w-[1150px] mx-auto">
            <div className="hero-content flex-col lg:flex-row">

                <div className='flex-1 p-5 space-y-3'>
                    <button className='btn border-1 text-[#fb2c36] border-error bg-[#fee9ea] rounded-full'>✨Froniter AI Models</button>
                    <h1 className="text-5xl text-[#fb2c36] font-bold  ">One Subscription.</h1>
                    <h1 className="text-5xl font-bold bg-linear-to-r from-[#fb2c36] to-[#ffb900] bg-clip-text"><span className=' text-transparent'>All the AIs You Need</span></h1>
                    <p className="py-6 text-lg">
                        Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.
                    </p>
                    <button className="btn bg-[#e7000b] hover:bg-[#fb2c36] w-70 h-15  text-white font-bold rounded-lg text-lg shadow-lg">Get Unlimited Access <FaArrowRightLong></FaArrowRightLong> </button>
                    <ul className='flex gap-5 mt-3'>
                        <li>✓ 50+ Frontier Models</li>
                        <li>✓ No Usage Limits</li>
                        <li>✓ Cancel Anytime</li>
                    </ul>
                    <p>

                    </p>
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