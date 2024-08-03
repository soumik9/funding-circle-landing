import Image from 'next/image';
import React, { useState } from 'react';
import CustomSlider from './partials/CustomSlider'; // Import the reusable component

const Estimate = () => {
    const [value, setValue] = useState(100000); // Default loan amount value
    const [duration, setDuration] = useState(2); // Default duration value

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeDuration = (event, newValue) => {
        setDuration(newValue);
    };

    return (
        <div className='container section-cmn'>
            <div>
                <Image src='/estimatewebp.webp' width={1000} height={640} className='w-full h-[256px] lg:h-[442px] xl:h-[640px]' alt='estimate' />
                <p className='mt-3 lg:mt-4 text-xs text-[#424554]'>Celina Hatt, Pawsh Place Veterinary Center</p>
            </div>
            <div className='lg:mt-[4rem] mt-[2rem] text-center help mb-5'>
                <h4 className='title-cmn'>Estimate your monthly loan payment</h4>
                <h2 className='heading3 my-3 lg:my-[1.5rem] text-dark'>See how affordable your monthly payments can be.</h2>
                <p className='body3'>Drop in your details and we’ll estimate your monthly payments for a variety of loan amounts and terms.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-[3em]'>
                <div className='bg-primary text-white flex flex-col gap-[2rem] p-[2rem] rounded-[.75rem]'>
                    <div>
                        <p className='body3 mb-[.5rem]'>Loan amount:</p>
                        <p className='flex justify-between body5 text-[#e8c9eb]'>
                            <span>$25K</span><span>$500K</span>
                        </p>
                        <CustomSlider
                            value={value}
                            onChange={handleChange}
                            min={25000}
                            max={500000}
                        />
                    </div>
                    <div>
                        <p className='body3 mb-[.5rem]'>Time to pay off:</p>
                        <p className='flex justify-between body5 text-[#e8c9eb]'>
                            <span>6 months</span><span>7 years</span>
                        </p>
                        <CustomSlider
                            value={duration}
                            onChange={handleChangeDuration}
                            min={1}
                            max={8}
                            unit={duration === 1 ? 'months' : 'years'}
                        />
                    </div>

                    <div>
                        <p className='body3 mb-[.5rem]'>Your estimated credit health:</p>
                        <select className='text-dark w-full py-2 rounded-[.5rem] border-none outline-none px-2'>
                            <option value="">Excellent</option>
                            <option value="">Very Good</option>
                            <option value="">Good</option>
                            <option value="">Fair</option>
                            <option value="">Poor</option>
                        </select>
                    </div>
                </div>
                <div className='bg-dark text-white flex flex-col justify-center p-[2rem] rounded-[.75rem]'>
                    <p className='body4 text-[#e8c9eb]'>Your estimated monthly payment</p>
                    <p className='text-[70px]  leading-[82px]'>$1,000</p>
                    <button className='btn btn-cta bg-primary text-white w-max my-3'>Apply now</button>
                    <p className='text-[#9396a7]'>*This estimate does not include origination fee. Calculations are intended as a guide only and you may be offered different terms.</p>
                </div>
            </div>
        </div>
    );
};

export default Estimate;
