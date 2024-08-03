import ChooseFour from "@/components/svgs/ChooseFour";
import ChooseOne from "@/components/svgs/ChooseOne";
import ChooseThree from "@/components/svgs/ChooseThree";
import ChooseTwo from "@/components/svgs/ChooseTwo";
import WorkOneSvg from "@/components/svgs/WorkOneSvg";
import WorkThreeSvg from "@/components/svgs/WorkThreeSvg";
import WorkTwoSvg from "@/components/svgs/WorkTwoSvg";

export const footerLinks = [
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms of Use" },
    { href: "#", text: "USA Patriot Act Notice" },
    { href: "#", text: "Your California Privacy Choices" },
    { href: "#", text: "Site Map" },
];

export const footerSections = [
    {
        title: "Funding Circle",
        links: [
            { href: "#", text: "Small business loans" },
            { href: "#", text: "About" },
            { href: "#", text: "Resources" },
            { href: "#", text: "Shareholder Information" },
            { href: "#", text: "Business term loan" },
            { href: "#", text: "Line of credit" },
        ],
    },
    {
        title: "Connect",
        links: [
            { href: "#", text: "Contact us" },
            { href: "#", text: "FAQ" },
            { href: "#", text: "Institutional investors" },
            { href: "#", text: "Partners" },
            { href: "#", text: "Careers" },
        ],
    },
    {
        title: "Community",
        links: [
            { href: "#", text: "Newsroom" },
            { href: "#", text: "ILPA" },
            { href: "#", text: "Borrowers' Bill of Rights" },
        ],
    },
];

export const chooseCardData = [
    {
        Component: <ChooseOne />,
        title: 'Affordable payments',
        description: 'Lower rates, bigger loans, and longer terms add up to cost-effective monthly payments with no pre-payment fees.',
    },
    {
        Component: <ChooseTwo />,
        title: 'Funding at light speed',
        description: 'Say goodbye to complex forms and long waits and say hello to funding in as soon as 2 business days.1',
    },
    {
        Component: <ChooseThree />,
        title: 'No impact to your credit score',
        description: 'Whatever your credit is, apply without any risk of it changing.',
    },
    {
        Component: <ChooseFour />,
        title: 'Predictable cashflow',
        description: 'Transparent monthly payments and a fixed interest rate mean you can plan on consistent payments each month.',
    },
];

export const whoWeAreStatsData = [
    {
        title: 'More than 143,000 loans',
        titleClass: 'text-primary',
        description: 'We’ve helped small businesses in the US and UK by funding 143,000+ loans.',
    },
    {
        title: '90%+ referral rate',
        titleClass: 'text-[#34b576]',
        description: 'Over 90% of US borrowers say they’d refer us to a friend.',
    },
    {
        title: '24%+ business growth',
        titleClass: 'text-[#009bde]',
        description: 'US borrowers who grew were up an average of 24%+ after getting their loan.',
    },
    {
        imageSrc: '/us-fin.avif',
        imageAlt: 'us-unif',
        description: 'Funding Circle was awarded for leading the financial technology sector in small business lending.',
    },
];

export const faqDatas = [
    {
        title: 'Who can apply for a Funding Circle loan?',
        content: (
            <>
                <p>The minimum qualifications for a loan through Funding Circle are:</p>
                <ul className="list-disc ml-5">
                    <li>2+ years in business</li>
                    <li>At least one business owner must have a personal Experian FICO® credit score of 660+</li>
                    <li>Annual revenue of $50,000+</li>
                    <li>No personal bankruptcies among business owners within the last seven years</li>
                    <li>Funding Circle has funded 700+ industries, however, select industries are not eligible including but not limited to: speculative real estate, nonprofit organizations, weapons manufacturers, gambling businesses, marijuana dispensaries, and pornography</li>
                </ul>
            </>
        ),
    },
    {
        title: 'Will you check my credit?',
        content: (
            <p>When you apply, Funding Circle will not conduct a hard credit check, so your personal credit score will not be affected. Instead, we conduct soft credit inquiries on both the business and the owner(s) to underwrite or to service your loan, and we only conduct these after you’ve agreed to these inquiries during the application process. These soft inquiries will not impact your business or personal credit score or show up on future reports obtained by other lenders.</p>
        ),
    },
    {
        title: 'What can I do to ensure a quick decision?',
        content: (
            <p>Once you fill out the quick, 6-minute online application, you will be asked to submit 6 months of your most recent business bank statements and 1-2 years of tax returns. Our process integrates with Plaid, so you may be able to automatically provide your bank statements in just a few clicks.</p>
        ),
    },
    {
        title: 'Do you share my application information with other lenders?',
        content: (
            <p>In certain situations, in order to provide you with additional funding options, we share your information with third-party lenders as further described in our privacy policy. Additionally, once your business is funded, we file a UCC-1 financing statement — a searchable record — on your business assets. Our name on these filings is masked for additional security.</p>
        ),
    },
    {
        title: 'Aside from interest, what are Funding Circle’s fees?',
        content: (
            <p>Like many lenders, Funding Circle charges a one-time origination fee that is based on the strength of your credit profile and ranges from 4.49% to 10.49%. There are never any upfront fees to apply. One of the key benefits of a Funding Circle loan is no prepayment penalties. This means, if you pay off your loan early, you will not pay any additional fees. Also, if your monthly payment is more than 10 days late, we may charge a late fee of up to 5% of each missed payment amount. The late fee will be payable immediately and is in addition to your missed payment.</p>
        ),
    },
];

export const navbarData = [
    {
        id: 1,
        title: 'Manage my loan',
        path: '#',
        subItems: []
    },
    {
        id: 2,
        title: 'Sign into my application',
        path: '#',
        subItems: []
    },
    {
        id: 3,
        title: 'Partners',
        path: '#',
        subItems: [
            {
                id: 1,
                title: 'Partner program',
                path: '#',
            },
            {
                id: 2,
                title: 'Merchant Portal',
                path: '#',
            },
            {
                id: 3,
                title: 'Lending as a service',
                path: '#',
            },
            {
                id: 4,
                title: 'Affiliate program',
                path: '#',
            },
        ]
    },
    {
        id: 4,
        title: 'About us',
        path: '#',
        subItems: [
            {
                id: 1,
                title: 'Company',
                path: '#',
            },
            {
                id: 2,
                title: 'Careers',
                path: '#',
            },
            {
                id: 3,
                title: 'Contact us',
                path: '#',
            },
            {
                id: 4,
                title: 'Newsroom',
                path: '#',
            },
        ]
    },
    {
        id: 5,
        title: 'Resources',
        path: '#',
        subItems: [
            {
                id: 1,
                title: 'Resource Center',
                path: '#',
            },
            {
                id: 2,
                title: 'PPP forgiveness',
                path: '#',
            },
            {
                id: 3,
                title: 'FAQs',
                path: '#',
            },
            {
                id: 4,
                title: 'Customer success stories',
                path: '#',
            },
            {
                id: 5,
                title: 'SBA Loan Guide',
                path: '#',
            },
        ]
    },
]

export const howItWorksdatas = [
    {
        id: 1,
        icon: <WorkOneSvg />,
        title: 'Take 6 minutes to apply.',
        description: 'Fill out the simple online application. It’s quick and easy to get started.'
    },
    {
        id: 2,
        icon: <WorkTwoSvg />,
        title: 'Get your loan approved fast.',
        description: 'Approvals in as fast as 24 hours<sup>1</sup> with no impact on your credit score.'
    },
    {
        id: 3,
        icon: <WorkThreeSvg />,
        title: 'Get funded.',
        description: 'Get the cash your business needs in as fast as 2 business days. <sup>1</sup>'
    },
    // Add more items as needed
];