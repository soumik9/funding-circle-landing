import AchendatBusiness from '@/components/svgs/AchendatBusiness';
import TrustPilotSvg from '@/components/svgs/TrustPilotSvg';
import Image from 'next/image';
import React from 'react';

const TrustSection = () => {
    return (
        <>
            <TrustPilotSvg />
            <div className='flex gap-[2px]'>
                <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                <Image src='/star-half.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
            </div>
            <AchendatBusiness />
        </>
    );
};

export default TrustSection;