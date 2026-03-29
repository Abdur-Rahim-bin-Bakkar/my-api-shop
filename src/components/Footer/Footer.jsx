import React from 'react';
import img from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-black text-white pb-7'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-black text-white px-4 py-14 gap-10 space-y-10 '>
                <div className="">
                    <div className="flex gap-2 items-center">
                        <img src={img} className='w-14' alt="" />
                        <h1 className='text-2xl font-bold'>AI Hub</h1>
                    </div>
                    <p className='mt-10'>One subscription. Access to all frontier AI models in a single powerful platform.</p>
                </div>
                <div className="">
                    <h1 className='font-bold text-2xl text-[#fd482b]'>Product</h1>
                    <ul className='mt-10 space-y-8 text-[#9f9fa9]'>
                        <li className='hover:text-white cursor-pointer'> <a href="">Models</a></li>
                        <li className='hover:text-white cursor-pointer'>Pricing</li>
                        <li className='hover:text-white cursor-pointer'>Features</li>
                        <li className='hover:text-white cursor-pointer'>API</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='font-bold text-2xl text-[#fd482b]'>Company</h1>
                    <ul className='mt-10 space-y-8 text-[#9f9fa9]'>
                        <li className='hover:text-white cursor-pointer'>About Us</li>
                        <li className='hover:text-white cursor-pointer'>Blog</li>
                        <li className='hover:text-white cursor-pointer'>Careers</li>
                        <li className='hover:text-white cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className="">
                    <h1 className='font-bold text-2xl text-[#fd482b]'>Legal</h1>
                    <ul className='mt-10 space-y-8 text-[#9f9fa9]'>
                        <li className='hover:text-white cursor-pointer'>ModPrivacy Policyels</li>
                        <li className='hover:text-white cursor-pointer'>Terms of Service</li>
                        <li className='hover:text-white cursor-pointer'>Cookie Settings</li>
                    </ul>
                </div>
                <div className='divider   divider-success'></div>

            </div>
            <div className="text-center space-y-5">
                <p>© 2026 AI Hub. All rights reserved.</p>
                <p>Made with ❤️ for AI enthusiasts</p>
            </div>
        </div>
    );
};

export default Footer;