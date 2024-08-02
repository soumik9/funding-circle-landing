import { chooseCardData } from '@/utils/data';
import React from 'react';
import TrustPilotCmn from './partials/TrustPilotCmn';

const WhyChooseUs = () => {
    return (
        <div className='bg-[#f9f1fa9c] container'>
            <div className='py-[4rem] lg:py-[8rem]'>

                <div className='flex lg:justify-between flex-col lg:flex-row'>
                    <div className='flex-grow lg:w-8/12'>
                        <h4 className='title-cmn'>Why choose us</h4>
                        <h2 className='xl:text-[40px] text-[26px] leading-[30px] xl:leading-[53px] tracking-[-.68px] font-bold text-dark my-[1.5rem]'>There’s funding and then there’s <br /> Funding Circle.</h2>
                        <p className='text-[18px] leading-[28px] tracking-[-.114px]'>Learn why we were named the best online lender for small businesses.</p>
                    </div>

                    <div className='lg:w-4/12 flex lg:justify-end items-center mt-[3rem] lg:mt-0'>
                        <TrustPilotCmn />
                    </div>
                </div>

                <div className='mt-[4rem]'>
                    <div className='grid lg:grid-cols-4 gap-3'>
                        {chooseCardData.map(({ Component, title, description }, index) => (
                            <div key={index} className='bg-white p-[1.5rem] rounded-[.75rem]'>
                                {Component}
                                <div className='mt-[1.5rem]'>
                                    <h5 className='text-[18px] leading-[22px] font-bold mb-[0.5rem] text-dark'>{title}</h5>
                                    <p className='leading-[24px] text-base text-[#212529]'>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;