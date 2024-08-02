import { footerLinks, footerSections } from '@/utils/data';
import Link from 'next/link';
import React from 'react';
import TrustPilotSvg from '../svgs/TrustPilotSvg';
import AchendatBusiness from '../svgs/AchendatBusiness';
import Image from 'next/image';
import FacebookSvg from '../svgs/FacebookSvg';
import TwitterSvg from '../svgs/TwitterSvg';
import LinkedinSvg from '../svgs/LinkedinSvg';
import YoutubeSvg from '../svgs/YoutubeSvg';

const Footer = () => {
    return (
        <footer className='bg-dark px-[1.5rem] py-[3rem] container text-white text-sm'>
            <div className='flex justify-between'>
                <div className='flex gap-[2.25rem]'>
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className='text-gray mb-[.75rem]'>{section.title}</h3>
                            <ul className='flex flex-col gap-[.75rem]'>
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href}>{link.text}</Link>
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

            <div className='flex justify-between mb-[2rem]'>
                <ul className='flex flex-wrap gap-x-[2rem]'>
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                            <Link href="#" className='text-gray-secondary text-sm'>{link.text}</Link>
                        </li>
                    ))}
                </ul>

                <div className='flex gap-x-[2rem] items-center'>
                    <TrustPilotSvg />
                    <div className='flex gap-[2px]'>
                        <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                        <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                        <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                        <Image src='/star.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                        <Image src='/star-half.svg' width={150} height={150} alt='star' className='h-[1.25rem] w-[1.25rem]' />
                    </div>
                    <AchendatBusiness />
                </div>
            </div>

            <div className='flex flex-col gap-y-[1rem] text-gray text-sm'>
                <p>Copyright © 2024 Funding Circle Limited. All rights reserved.</p>
                <p>All loan offers and qualifications require credit approval and are subject to change with or without notice.</p>
                <p>{`Loans are made by FC Marketplace, LLC dba Funding Circle and arranged pursuant to Nevada Installment Loan Company License No. IL11154 and IL11155, California Financing License No. 6054785, North Dakota Money Broker License MB 102840, South Dakota Money Lending License 1287979.MYL, and Florida Consumer Company License CF9901099. FC SBA Lending LLC's NMLS ID is 2555282. Partner Loans are made or arranged pursuant to their applicable lending license(s).`}</p>
                <p id="disclaimer-one"><sup>1</sup> Approval and funding times may vary by lending partner and financing product selected.</p>
            </div>
        </footer>
    );
};

export default Footer;