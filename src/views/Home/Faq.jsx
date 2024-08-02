import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import ArcoItem from './partials/ArcoItem';
import Link from 'next/link';
import { faqDatas } from '@/utils/data';

const Faq = () => {

    const [open, setOpen] = useState(null);
    console.log(open)

    return (
        // <div className='bg-[#f9f1fa9c]'>
        <div className='container section-cmn'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
                <div>
                    <h4 className='title-cmn'>FAQS</h4>
                    <h2 className='heading3 my-3 lg:my-4'>Questions? Answers.</h2>

                    <div className='bg-[#f7f8fe] p-[2rem]'>
                        <p className='title5'>If you’ve got questions, we can help.</p>
                        <p className='leading-[24px] mb-[1rem]'>Call in and talk to a US-based, real person on our customer <br /> service team.</p>

                        <p className='text-xs text-[#9396a7]'>
                            <span className='text-primary'>1 (855) 385-5356</span> | M-F / 7am - 4pm PST
                        </p>
                    </div>
                </div>

                <div>
                    <div className='mb-3 lg:mb-4'>
                        {faqDatas.map((item, index) => (
                            <ArcoItem
                                key={index}
                                id={index}
                                title={item.title}
                                open={open}
                                setOpen={setOpen}
                            >
                                {item.content}
                            </ArcoItem>
                        ))}
                    </div>

                    <p className='title5 mb-3 lg:mb-4'>Still have questions?</p>

                    <Link href="#" className='btn btn-cta'>
                        Read the full FAQs
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Faq;