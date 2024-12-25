import React from 'react';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Divider = ({ children, className }: Props) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <span className='h-[1pt] w-full bg-primary-main' />
            <span className=' text-fore-contrast font-semibold text-s1'>{children}</span>
            <span className='h-[1pt] w-full bg-primary-main' />
        </div>
    );
};

export default Divider;
