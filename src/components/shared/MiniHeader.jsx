import Image from 'next/image';
import React from 'react';

const MiniHeader = () => {
    return (
        <div className='h-[43px] bg-dark px-[1.5rem] font-sm text-white flex items-center justify-end'>
            <div className='flex gap-[2rem]'>
                <div className='flex gap-[.5rem]'>
                    <Image src="/usa.svg" width={23} height={19} alt="flag" />
                    <small>United States</small>
                </div>

                <a href='tel:+18553855356'>(855) 385-5356</a>
                <small>Manage my loan/application</small>
            </div>
        </div>
    );
};

export default MiniHeader;