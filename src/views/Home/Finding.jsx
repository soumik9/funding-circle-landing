import React from 'react';

const Finding = () => {
    return (
        <div className='container lg:flex lg:flex-col lg:items-center'>
            <div className='section-cmn text-center w-full lg:max-w-[80%] xl:max-w-[75%] '>
                <h2 className="text-[26px] lg:text-[60px] tracking-[-1.02px] text-center mt-3 md:mt-4 leading-[30px] lg:leading-[70px] font-bold text-dark">Congratulations on finding the best way to fund your business.</h2>

                <button className='mt-[2.5rem] btn btn-cta bg-primary text-white'>
                    Apply now
                </button>
            </div>
        </div>
    );
};

export default Finding;