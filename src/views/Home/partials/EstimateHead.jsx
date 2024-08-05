import React from 'react';

const EstimateHead = ({ divCss }) => {
    return (
        <div className={`lg:mt-[4rem] mt-[2rem] text-center help mb-5 ${divCss}`}>
            <h4 className='title-cmn'>Estimate your monthly loan payment</h4>
            <h2 className='heading3 my-3 lg:my-[1.5rem] text-dark'>See how affordable your monthly payments can be.</h2>
            <p className='body3'>Drop in your details and we’ll estimate your monthly payments for a variety of loan amounts and terms.</p>
        </div>
    );
};

export default EstimateHead;