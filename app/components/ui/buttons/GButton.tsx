import type { ReactNode } from 'react';

interface GButtonProps {
    children: ReactNode;
    block?: boolean;
    size?: 'small' | 'large';
    onClick?: () => void;
    href?: string;
}

const GButton = ({ children, block, size = 'small', onClick, href }: GButtonProps) => {
    const mainClass = `bg-black/90 items-center px-3 flex justify-center cursor-pointer font-semibold ${
        block ? 'w-full' : ''
    }`;
    const sizeClass =
        size === 'small' ? 'h-[33px] text-s1 rounded-lg' : 'h-[45px] text-s2 rounded-2xl';
    const contentClass =
        'font-semi-bold flex items-center justify-center bg-gradient-to-r from-primary-main via-blue-500 to-red-400 text-transparent bg-clip-text';

    const Tag = href ? 'a' : onClick ? 'button' : 'span';
    const extraProps = href ? { href } : onClick ? { onClick } : {};

    return (
        <Tag {...extraProps} className={`${mainClass} ${sizeClass}`}>
            <span className={contentClass}>{children}</span>
        </Tag>
    );
};

export default GButton;
