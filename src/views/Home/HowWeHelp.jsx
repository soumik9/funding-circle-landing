import { wiSliderDatas } from '@/utils/data';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const HowWeHelp = () => {
    return (
        <div className='section-cmn'>
            <div className='mb-[4rem] text-center help'>
                <h4 className='title-cmn'>How We Help</h4>
                <h2 className='heading3 my-3 lg:my-4'>Real customers. Real impact.</h2>
            </div>

            <div className=''>
                <Swiper
                    spaceBetween={250}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    className='h-[500px]'
                >
                    {wiSliderDatas.map(({ img, title, text, name, company, SliderIcon, textColor, bgColor }, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative px-5 w-[576px]'>
                                <Image src={img} width={374} height={406} alt={title} className='w-[374px] h-[406px] rounded-[.75rem]' />
                                <div className={`p-[2rem] ${bgColor} ${textColor} w-[374px] h-auto absolute -right-28 top-12 rounded-[.75rem]`}>
                                    <p className={`title1 ${textColor}`}>{title}</p>
                                    <p className={`body1 my-[1rem] ${textColor}`}>{text}</p>
                                    <div className='flex gap-[1rem] items-center'>
                                        {SliderIcon}
                                        <p className={`body5 ${textColor}`}>{name}, {company}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                        <div className='relative px-5 w-[576px]'>
                            <Image src='/s1.webp' width={374} height={406} alt='spon-1' className='w-[374px] h-[406px] rounded-[.75rem]' />
                            <div className='p-[2rem] bg-dark text-white w-[374px] h-auto absolute -right-28 top-12 rounded-[.75rem]'>
                                <p className='text-[#e8c9eb] title1 '>Grow Your Business</p>
                                <p className='body1 my-[1rem]'>“All I heard from banks was ‘no, no, no.’ Funding Circle’s approach is so different than a traditional bank’s — and that’s what attracted me.”</p>
                                <div className='flex gap-[1rem] items-center'>
                                    <SliderOne />
                                    <p className='body5 text-[#e8c9eb]'>Gabriela & Fergus Hernandez, Besame Cosmetics</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative px-5 w-[576px]'>
                            <Image src='/s2.webp' width={374} height={406} alt='spon-1' className='w-[374px] h-[406px] rounded-[.75rem]' />
                            <div className='p-[2rem] bg-primary text-white w-[374px] h-auto absolute -right-28 top-12 rounded-[.75rem]'>
                                <p className='text-[#e8c9eb] title1 '>Invest in Marketing</p>
                                <p className='body1 my-[1rem]'>“It was a very simple process. I feel blessed that I decided to call Funding Circle.”</p>
                                <div className='flex gap-[1rem] items-center'>
                                    <SliderTwo />
                                    <p className='body5 text-[#e8c9eb]'>Willie Powells, The Law Offices of Willie D. Powells III and Associates, PLLC</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative px-5 w-[576px]'>
                            <Image src='/s3.webp' width={374} height={406} alt='spon-1' className='w-[374px] h-[406px] rounded-[.75rem]' />
                            <div className='p-[2rem] bg-dark text-white w-[374px] h-auto absolute -right-28 top-12 rounded-[.75rem]'>
                                <p className='text-[#e8c9eb] title1 '>Purchase Inventory</p>
                                <p className='body1 my-[1rem]'>“By buying inventory before prices increased, we estimate that loan from Funding Circle saved us $20,000 – $30,000 … even with the interest we paid on the loan.”</p>
                                <div className='flex gap-[1rem] items-center'>
                                    <SliderThree />
                                    <p className='body5 text-[#e8c9eb]'>Peter Koshland, Koshland Pharm</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative px-5 w-[576px]'>
                            <Image src='/s4.webp' width={374} height={406} alt='spon-1' className='w-[374px] h-[406px] rounded-[.75rem]' />
                            <div className='p-[2rem] bg-dark text-white w-[374px] h-auto absolute -right-28 top-12 rounded-[.75rem]'>
                                <p className='text-[#e8c9eb] title1 '>Working Capital</p>
                                <p className='body1 my-[1rem]'>“I recommend Funding Circle because they really get small business. The whole process is a lot smoother, faster, and more personalized than what you’d get from a bank.””</p>
                                <div className='flex gap-[1rem] items-center'>
                                    <SliderFour />
                                    <p className='body5 text-[#e8c9eb]'>Viola Sutanto, Maika Goodss</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative px-5 w-[576px]'>
                            <Image src='/s5.webp' width={374} height={406} alt='spon-1' className='w-[374px] h-[406px] rounded-[.75rem]' />
                            <div className='p-[2rem] bg-[#e8c9eb] text-dark w-[374px] h-auto absolute -right-28 top-12 rounded-[.75rem]'>
                                <p className=' title1 '>Restructure Debt</p>
                                <p className='body1 my-[1rem]'>“All I heard from banks was ‘no, no, no.’ Funding Circle’s approach is so different than a traditional bank’s — and that’s what attracted me.”</p>
                                <div className='flex gap-[1rem] items-center'>
                                    <SliderFive />
                                    <p className='body5'>Ronald Schott, Ace Media Productions</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>

            {/* <div className='flex justify-center'>
                <div className='flex space-x-4'>
                    {steps.map((stepNumber, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(stepNumber)}
                            className={`cursor-pointer w-6 rounded-[.75rem] h-1 border-2 ${step === stepNumber ? 'border-primary' : 'border-gray-secondary'
                                }`}
                        ></div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default HowWeHelp;
