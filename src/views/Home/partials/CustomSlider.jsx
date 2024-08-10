import { Slider } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';

const WhiteBackgroundSlider = styled(Slider)({
    '& .MuiSlider-rail': {
        background: '#ced4da',
    },
    '& .MuiSlider-track': {
        background: '#ced4da',
        height: '8px',
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        backgroundColor: '#fff',
    },
});

const CustomSlider = ({ value, onChange, min, max, unit, ...props }) => {
    const valueDisplayRef = useRef(null);

    useEffect(() => {
        const updatePosition = () => {
            if (valueDisplayRef.current) {
                const slider = document.querySelector('.MuiSlider-root');
                const thumb = document.querySelector('.MuiSlider-thumb');
                if (slider && thumb) {
                    const sliderRect = slider.getBoundingClientRect();
                    const thumbRect = thumb.getBoundingClientRect();
                    const thumbCenter = thumbRect.left + thumbRect.width / 2;
                    const sliderCenter = sliderRect.left + sliderRect.width / 2;
                    const thumbOffset = thumbCenter - sliderCenter + sliderRect.width / 2;
                    valueDisplayRef.current.style.left = `${thumbOffset}px`;
                }
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);

        return () => window.removeEventListener('resize', updatePosition);
    }, [value]);

    return (
        <div className='relative'>
            <WhiteBackgroundSlider
                value={value}
                onChange={onChange}
                aria-label="Default"
                valueLabelDisplay="off"
                min={min}
                max={max}
                {...props}
            />
            <div
                ref={valueDisplayRef}
                className='text-gray-secondary absolute top-[25px] whitespace-nowrap'
                style={{ transform: 'translateX(-50%)' }}
            >
                <strong>{unit ?
                    value === 1 ? `6 ${unit}` : `${value - 1} Years` :
                    `$${value.toLocaleString()}`
                }</strong>
            </div>
        </div>
    );
};

export default CustomSlider;
