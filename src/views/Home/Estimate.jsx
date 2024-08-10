import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CustomSlider from './partials/CustomSlider'; // Import the reusable component
import EstimateHead from './partials/EstimateHead';

const Estimate = () => {

    const [value, setValue] = useState(1000000); // Default loan amount value
    const [duration, setDuration] = useState(2); // Default duration value
    const [range, setRange] = useState('excellent');

    const [total, setTotal] = useState(0);

    const calculateTotal = (interest, p, n) => {
        const r = (interest / 12);
        const total = (p / n) + (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, (n - 1)));
        return total.toFixed(2);
    }

    useEffect(() => {
        if (duration === 1) {
            if (range === 'excellent') {
                const total = calculateTotal(0.17, value, 6);
                setTotal(total);
            } else if (range === 'very-good') {
                const total = calculateTotal(0.19, value, 6);
                setTotal(total);
            } else if (range === 'good') {
                const total = calculateTotal(0.21, value, 6);
                setTotal(total);
            } else if (range === 'fair') {
                const total = calculateTotal(0.23, value, 6);
                setTotal(total);
            } else if (range === 'poor') {
                const total = calculateTotal(0.25, value, 6);
                setTotal(total);
            }
        }

        if (duration > 1) {
            if (range === 'excellent') {
                const total = calculateTotal(0.17, value, ((duration - 1) * 12));
                setTotal(total);
            } else if (range === 'very-good') {
                const total = calculateTotal(0.19, value, ((duration - 1) * 12));
                setTotal(total);
            } else if (range === 'good') {
                const total = calculateTotal(0.21, value, ((duration - 1) * 12));
                setTotal(total);
            } else if (range === 'fair') {
                const total = calculateTotal(0.23, value, ((duration - 1) * 12));
                setTotal(total);
            } else if (range === 'poor') {
                const total = calculateTotal(0.25, value, ((duration - 1) * 12));
                setTotal(total);
            }
        }
    }, [value, duration, range]);

    const handleChange = (event, newValue) => {
        if (newValue <= 500000) {
            setValue(newValue <= 100000 ? 100000 : 500000);  // Ensure it decreases to 100,000 or moves to 500,000
        } else {
            const stepsFrom500K = Math.round((newValue - 500000) / 500000) * 500000 + 500000;
            setValue(stepsFrom500K);
        }
    };

    const handleChangeDuration = (event, newValue) => {
        setDuration(newValue);
    };

    const handleChangeSelect = (event) => {
        setRange(event.target.value);
    };

    return (
        <div className='container section-cmn'>
            <div className='relative'>
                <EstimateHead divCss='xl:block hidden' />
                <div className='flex justify-center items-center flex-col'>
                    <Image
                        src='/estimatewebp.webp'
                        width={1000}
                        height={640}
                        className='w-full h-[256px] lg:h-[442px] xl:h-[640px] xl:w-[1074px]'
                        alt='estimate'
                    />
                    <div className='text-left xl:w-[1074px]'>
                        <p className='w-full mt-3 lg:mt-4 text-xs text-[#424554]'>Celina Hatt, Pawsh Place Veterinary Center</p>
                    </div>
                </div>
                <EstimateHead divCss='xl:hidden block' />
                <div className='grid lg:grid-cols-2 xl:grid-cols-1 gap-[3em]'>
                    <div className='bg-primary text-white flex flex-col gap-[2rem] p-[2rem] rounded-[.75rem] xl:w-[340px] xl:absolute xl:top-[33%]'>
                        <div>
                            <p className='body3 mb-[.5rem]'>Loan amount:</p>
                            <p className='flex justify-between body5 text-[#e8c9eb]'>
                                <span suppressHydrationWarning>100000</span><span>5M</span>
                            </p>
                            <CustomSlider
                                value={value}
                                onChange={handleChange}
                                min={100000}
                                max={5000000}
                                step={500000}
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
                            <select
                                className='text-dark w-full py-2 rounded-[.5rem] border-none outline-none px-2'
                                value={range}
                                onChange={handleChangeSelect}
                            >
                                <option value="excellent">Excellent</option>
                                <option value="very-good">Very Good</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                                <option value="poor">Poor</option>
                            </select>
                        </div>
                    </div>
                    <div className='bg-dark text-white flex flex-col justify-center p-[1.5rem] rounded-[.75rem] xl:w-[440px] xl:absolute xl:top-[63%] xl:right-0'>
                        <p className='body4 text-[#e8c9eb]'>Your estimated monthly payment</p>
                        <p className='text-[70px]  leading-[82px]'> {`$${total.toLocaleString()}`}</p>
                        <button className='btn btn-cta bg-primary text-white w-max my-3'>Apply now</button>
                        <p className='text-[#9396a7]'>*This estimate does not include origination fee. Calculations are intended as a guide only and you may be offered different terms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estimate;
