import React from 'react';
import Image from 'next/image';
import Spon5 from '@/components/svgs/Spon5';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsers = () => {

    const settings = {
        dots: false,
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
        <div className='lg:pb-[8rem] pb-[4rem] pt-[2rem]'>
            <Slider {...settings} className='slider-container'>
                <div className="slick-slide">
                    <Image src='/spon-1.webp' alt='spon-1' width={110} height={55} />
                </div>
                <div className="slick-slide">
                    <Image src='/spon-2.webp' alt='spon-2' width={71} height={100} />
                </div>
                <div className="slick-slide">
                    <Image src='/spon-3.webp' alt='spon-3' width={88} height={100} />
                </div>
                <div className="slick-slide">
                    <Spon5 />
                </div>
                <div className="slick-slide">
                    <Image src='/spon-6.webp' alt='spon-6' width={110} height={55} />
                </div>
            </Slider>
        </div>
    );
};

export default Sponsers;