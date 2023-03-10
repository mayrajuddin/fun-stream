import React from 'react';
import FotTop from './FotTop';

const Footer = () => {
    return (
        <div className='bg-[#12222D] text-fuchsia-50'>
            <FotTop />
            <div className="border-t border-[#203544]">
                <div className="container mx-auto">
                    <p className="text-lg py-6"> Copyright &copy; 2023  All rights reserved | <b>Mayraj Uddin</b></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;