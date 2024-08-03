import React, { useState, useRef, useEffect } from 'react';

const Hero = () => {

    const [step, setStep] = useState(1);
    const videoRefs = useRef([]);
    const endFlag = useRef(false); // Add a flag to prevent multiple state updates

    useEffect(() => {
        // Attach event listeners to each video
        const handleVideoEnd = (index) => {
            if (!endFlag.current) {
                endFlag.current = true; // Set the flag to prevent multiple updates
                setStep((prevStep) => ((prevStep === 3) ? 1 : prevStep + 1));
            }
        };

        videoRefs.current.forEach((video, index) => {
            if (video) {
                video.addEventListener('ended', () => handleVideoEnd(index));
            }
        });

        return () => {
            // Clean up event listeners on component unmount
            videoRefs.current.forEach((video) => {
                if (video) {
                    video.removeEventListener('ended', handleVideoEnd);
                }
            });
        };
    }, []);

    useEffect(() => {
        // Reset the flag when the step changes
        endFlag.current = false;

        // Play the active video
        videoRefs.current.forEach((video, index) => {
            if (video) {
                video.currentTime = 0;
                if (step === index + 1) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    }, [step]);

    return (
        <div className='container section-cmn'>
            <div className='flex flex-col lg:flex-row flex-col-reverse items-center justify-between'>

                <div className=' w-full lg:w-[40%]'>
                    <h2 className="text-[26px] lg:text-[60px] tracking-[-1.02px] mt-3 md:mt-4 leading-[30px] lg:leading-[70px] font-bold text-dark">
                        {`You define your goals, we'll help you fund them.`}
                    </h2>
                    <p className='mt-3 lg:mt-4 body3'>
                        Affordable business loans between $25,000 and $500,000 in as fast as 2 business days. <sup>1</sup>
                    </p>
                    <div className='mb-[1rem] mt-[2.5rem] flex gap-[1rem]'>
                        <button className='btn btn-cta bg-primary text-white'>Apply now</button>
                        <button className='btn btn-cta'>Estimate my payment</button>
                    </div>
                    <p className='title4 font-bold text-dark'>No impact to your credit score when you apply.</p>
                </div>

                <div className='w-full lg:w-[55%] h-[268px] lg:h-[560px] flex gap-[1.5rem]'>

                    <video
                        src="/v1.webm"
                        ref={el => (videoRefs.current[0] = el)}
                        className={`${step === 1 ? 'w-[37%] lg:w-[43%]' : 'w-[25%]'} h-full object-cover rounded-[.75rem] step-item transition-all duration-500`}
                        muted
                    />
                    <video
                        src="/v2.webm"
                        ref={el => (videoRefs.current[1] = el)}
                        className={`${step === 2 ? 'w-[37%] lg:w-[43%]' : 'w-[25%]'} h-full object-cover rounded-[.75rem] step-item transition-all duration-500`}
                        muted
                    />
                    <video
                        src="/v3.webm"
                        ref={el => (videoRefs.current[2] = el)}
                        className={`${step === 3 ? 'w-[37%] lg:w-[43%]' : 'w-[25%]'} h-full object-cover rounded-[.75rem] step-item transition-all duration-500`}
                        muted
                    />

                </div>
            </div>
        </div>
    );
};

export default Hero;
