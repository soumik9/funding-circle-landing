import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { wiSliderDatas } from '@/utils/data';

const HowWeHelp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null); // Create a ref for Swiper

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

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
                    className='h-[730px] lg:h-[500px]'
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => { swiperRef.current = swiper; }} // Set the swiper instance to the ref
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            centeredSlides: true
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            centeredSlides: false
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 350,
                            centeredSlides: false
                        },
                    }}
                >
                    {wiSliderDatas.map(({ img, title, text, name, company, SliderIcon, textColor, bgColor }, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative xl:px-5 flex flex-col items-center justify-center xl:w-[576px]'>

                                <Image src={img} width={374} height={406} alt={title} className='w-[392px] h-[392px] lg:w-[461px] xl:w-[374px] lg:h-[406px] rounded-[.75rem]' />

                                <div className={`p-[1.5rem] xl:p-[2rem] ${bgColor} ${textColor} w-[392px] lg:w-[350px] xl:w-[374px] h-auto absolute top-72 right-2 lg:right-8 xl:-right-52 lg:top-12 rounded-[.75rem]`}>
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
                </Swiper>

                {/* Custom Navigation Dots */}
                <div className='flex justify-center mt-[2.5rem]'>
                    <div className='flex space-x-4'>
                        {wiSliderDatas.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    swiperRef.current.slideTo(index); // Use the ref to control Swiper
                                    setCurrentSlide(index);
                                }}
                                className={`cursor-pointer w-8 rounded-[.75rem] h-1 ${currentSlide === index ? 'bg-primary' : 'bg-gray-secondary'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeHelp;
