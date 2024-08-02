import { footerLinks, footerSections } from '@/utils/data';
import Link from 'next/link';
import React from 'react';
import FacebookSvg from '../svgs/FacebookSvg';
import TwitterSvg from '../svgs/TwitterSvg';
import LinkedinSvg from '../svgs/LinkedinSvg';
import YoutubeSvg from '../svgs/YoutubeSvg';
import TrustSection from './partials/TrustSection';

const Footer = () => {
    return (
        <footer className='bg-dark px-[1.5rem] py-[3rem] container text-white text-sm'>

            <div className='flex lg:justify-between flex-col lg:flex-row gap-y-[2rem] lg:gap-y-0'>
                <div className='flex flex-col lg:flex-row gap-[2.25rem]'>
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className='text-gray mb-[.75rem]'>{section.title}</h3>
                            <ul className='flex flex-col gap-[.75rem]'>
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className='text-gray-secondary'>{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <ul className='flex items-start gap-[.5rem]'>
                    <li><Link href="#"><FacebookSvg /></Link></li>
                    <li><Link href="#"><TwitterSvg /></Link></li>
                    <li><Link href="#"><LinkedinSvg /></Link></li>
                    <li><Link href="#"><YoutubeSvg /></Link></li>
                </ul>
            </div>

            <div className='border-t border-gray my-[1.5rem]'></div>

            <div className='flex justify-between mb-[2rem] gap-x-[.3rem]'>
                <ul className='flex flex-wrap gap-x-[2rem] gap-y-[1rem]'>
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                            <Link href="#" className='text-gray-secondary text-sm'>{link.text}</Link>
                        </li>
                    ))}
                </ul>

                <div className='gap-x-[2rem] items-center hidden lg:flex'>
                    <TrustSection />
                </div>
            </div>

            <div className='flex flex-col gap-y-[1rem] text-gray text-sm'>
                <p>Copyright © 2024 Funding Circle Limited. All rights reserved.</p>
                <p>All loan offers and qualifications require credit approval and are subject to change with or without notice.</p>
                <p>{`Loans are made by FC Marketplace, LLC dba Funding Circle and arranged pursuant to Nevada Installment Loan Company License No. IL11154 and IL11155, California Financing License No. 6054785, North Dakota Money Broker License MB 102840, South Dakota Money Lending License 1287979.MYL, and Florida Consumer Company License CF9901099. FC SBA Lending LLC's NMLS ID is 2555282. Partner Loans are made or arranged pursuant to their applicable lending license(s).`}</p>
                <p id="disclaimer-one"><sup>1</sup> Approval and funding times may vary by lending partner and financing product selected.</p>
            </div>

            <div className='flex gap-x-[2rem] items-center lg:hidden mt-[2rem] lg:mt-0'>
                <TrustSection />
            </div>
        </footer>
    );
};

export default Footer;