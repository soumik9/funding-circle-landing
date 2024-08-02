import TrustPilotGreenSvg from '@/components/svgs/TrustPilotGreenSvg';
import Image from 'next/image';
import React from 'react';

const TrustPilotCmn = ({ divCss }) => {
    return (
        <div className={`flex flex-col gap-2 ${divCss}`}>
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
    );
};

export default TrustPilotCmn;