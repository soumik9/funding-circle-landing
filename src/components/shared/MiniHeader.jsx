import React from 'react';
import FlagSvg from '../svgs/FlagSvg';

const MiniHeader = () => {
    return (
        <div className='h-[43px] bg-dark px-[1.5rem] text-sm text-white flex items-center'>
            <div className='flex lg:gap-[2rem] flex-grow justify-between lg:justify-end'>
                <div className='flex gap-[.5rem]'>
                    <FlagSvg />
                    <p className='hidden lg:block '>United States</p>
                </div>

                <div><a href='tel:+18553855356'>(855) 385-5356</a></div>
                <p>Manage my loan/application</p>
            </div>
        </div>
    );
};

export default MiniHeader;