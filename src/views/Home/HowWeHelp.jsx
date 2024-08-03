import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const HowWeHelp = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='section-cmn'>
            <div className='mb-[4rem] text-center help'>
                <h4 className='title-cmn'>How We Help</h4>
                <h2 className='heading3 my-3 lg:my-4'>Real customers. Real impact.</h2>
            </div>

            <Slider {...settings} className='slider-container'>
                <div className='slick-slide-help'>
                    <Image src='/s1.webp' alt='spon-1' width={374} height={406} className='w-[374px]' />
                </div>
                <div className='slick-slide-help'>
                    <Image src='/s2.webp' alt='spon-2' width={374} height={406} className='w-[374px]' />
                </div>
            </Slider>
        </div>
    );
};

export default HowWeHelp;
