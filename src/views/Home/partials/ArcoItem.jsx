import React from 'react';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';

const ArcoItem = ({ title, children, id, open, setOpen }) => {
    const isOpen = open === id;
    return (
        <div className={`py-6 border-b border-[#c9cbd9] ${id === 1 ? 'border-t' : ''}`}>
            <div
                role='button'
                onClick={() => setOpen(isOpen ? null : id)}
                className='flex items-center justify-between text-[18px] font-bold tracking-[-.114px] w-full text-dark'
            >
                <span>{title}</span>
                {isOpen ? <AiOutlineMinus className='text-primary' /> : <FiPlus className='text-primary' />}
            </div>

            <Collapse isOpened={isOpen}>
                <div className={`mt-[1rem] transition-all duration-500 ease-in-out ${isOpen ? 'open' : 'close'}`}>
                    {children}
                </div>
            </Collapse>
        </div>
    );
};

export default ArcoItem;