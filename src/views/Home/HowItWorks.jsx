import { howItWorksdatas } from '@/utils/data';
import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {

    const steps = [1, 2, 3];
    const intervalRef = useRef(null);
    const [step, setStep] = useState(1);

    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setStep(prevStep => (prevStep === steps.length ? steps[0] : prevStep + 1));
        }, 5000);
    };

    useEffect(() => {
        startInterval();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleClick = (step) => {
        setStep(step);
        startInterval(); // Restart the interval when a step is clicked
    };

    // Find the item that matches the current step
    const currentItem = howItWorksdatas.find(item => item.id === step);

    return (
        <div className='container section-cmn'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-8'>
                <div>
                    <h4 className='title-cmn'>How it works</h4>
                    <h2 className='heading3 my-3 lg:my-[1.5rem] text-dark'>Funding as easy as 1-2-3.</h2>
                    <p className='title4'>Minimum Requirements</p>
                    <ul className='mb-7 list-disc pl-5 space-y-1 mt-1 text-[#424554] body3'>
                        <li>2+ years in operation</li>
                        <li>$50K annual revenue</li>
                        <li>660+ FICO score</li>
                        <li>No bankruptcies within last 7 years</li>
                    </ul>

                    <button className='btn btn-cta bg-primary text-white lg:block !hidden'>Apply now</button>
                </div>

                <div className='flex flex-col lg:flex-row gap-5 justify-between'>

                    <div className='flex-1 flex flex-row lg:flex-col justify-center items-center mb-[1rem] lg:mb-0'>
                        {steps.map((s, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`rounded-[50px] flex items-center step-item justify-center cursor-pointer ${step === s ? 'min-w-[94px] min-h-[56px] bg-dark text-[#f7f8fe]' : 'text-dark bg-[#f7f8fe] min-w-[2.5rem] h-[2.5rem]'}`}
                                    onClick={() => handleClick(s)}
                                >
                                    {step === s && 'Step '}{s}
                                </div>
                                {index < steps.length - 1 && <div className='lg:border-l border-t lg:border-t-0 border-[#eff0f5] w-full lg:w-max lg:h-[2.5rem]'></div>}
                            </React.Fragment>
                        ))}
                    </div>

                    {currentItem && (
                        <div key={currentItem.id} className='bg-[#f7f8fe] py-[2.5rem] lg:py-[3rem] px-[1.5rem] lg:px-[2.5rem] flex flex-col gap-[1.5rem] w-full lg:w-[412px] lg:min-h-[413px] step-item rounded-[.75rem]'>
                            {currentItem.icon}
                            <div>
                                <h4 className='title3 font-[500] mb-3 text-dark'>{currentItem.title}</h4>
                                <p className='body3 text-dark' dangerouslySetInnerHTML={{ __html: currentItem.description }}></p>
                            </div>
                        </div>
                    )}

                </div>

                <button className='btn btn-cta bg-primary text-white lg:hidden block w-max'>Apply now</button>
            </div>
        </div>
    );
};

export default HowItWorks;