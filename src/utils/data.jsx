import ChooseFour from "@/components/svgs/ChooseFour";
import ChooseOne from "@/components/svgs/ChooseOne";
import ChooseThree from "@/components/svgs/ChooseThree";
import ChooseTwo from "@/components/svgs/ChooseTwo";

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
