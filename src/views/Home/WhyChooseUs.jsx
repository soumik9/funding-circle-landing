import TrustPilotGreenSvg from '@/components/svgs/TrustPilotGreenSvg';
import { chooseCardData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

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
                        <div className='flex flex-col gap-2 '>
                            <div className='w-[126px]'>
                                <TrustPilotGreenSvg />
                            </div>
                            <div className='flex gap-[2px]'>
                                <Image src='/star.svg' width={251} height={46} alt='star' className='h-[46px] w-[36px]' />
                                <Image src='/star.svg' width={251} height={46} alt='star' className='h-[46px] w-[36px]' />
                                <Image src='/star.svg' width={251} height={46} alt='star' className='h-[46px] w-[36px]' />
                                <Image src='/star.svg' width={251} height={46} alt='star' className='h-[46px] w-[36px]' />
                                <Image src='/star-half.svg' width={251} height={46} alt='star' className='h-[46px] w-[36px]' />
                            </div>
                            <p>
                                <span>TrustScore <strong>4.6</strong></span>
                                <span><strong>15,081</strong> <span>reviews</span></span>
                            </p>
                        </div>

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