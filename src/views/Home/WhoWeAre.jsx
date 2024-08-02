import React from 'react';
import TrustPilotCmn from './partials/TrustPilotCmn';
import Image from 'next/image';
import { whoWeAreStatsData } from '@/utils/data';

const WhoWeAre = () => {
    return (
        <div className='bg-[#f9f1fa9c]'>
            <div className='container lg:flex lg:flex-col lg:items-center'>
                <div className='lg:pb-[8rem] pb-[4rem] text-center w-full lg:max-w-[80%] xl:max-w-[75%]'>
                    <h4 className='title-cmn'>Who We Are</h4>
                    <h2 className="text-[26px] lg:text-[60px] tracking-[-1.02px] text-center mt-3 md:mt-4 leading-[30px] lg:leading-[70px] font-bold text-dark mb-3 lg:mb-4">$21,000,000,000+ <br /> funded</h2>
                    <TrustPilotCmn divCss='justify-center items-center' />
                </div>

                <div className='lg:pb-[8rem] pb-[4rem]'>
                    <div className='grid lg:grid-cols-4 gap-4'>
                        {whoWeAreStatsData.map(({ title, titleClass, description, imageSrc, imageAlt }, index) => (
                            <div key={index} className='p-[1.5rem] rounded-[.75rem] bg-white'>
                                {title && <h4 className={`text-[34px] font-[500] tracking-[-.34px] leading-[42px] ${titleClass}`}>{title}</h4>}
                                {imageSrc && <Image src={imageSrc} width={219} height={110} alt={imageAlt} />}
                                <p className='leading-[24px] mt-[1.5rem] text-[#212529]'>{description}</p>
                            </div>
                        ))}
                    </div>
                    <p className='mt-3 lg:mt-4 text-xs text-[#424554]'>Based on year-end results, 2023 and Funding Circle Borrower Study, January 2024.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;