import React, { useEffect, useState } from 'react';

interface DrawerProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, children, onClose }) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    // Handle the delayed visibility for smooth transition
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300); // 300ms is the duration of your opacity transition
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Handle background click to close drawer
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };

    return (
        <button
            type='button'
            className={`
                fixed inset-0 
                bg-black/30 
                flex justify-end 
                sm:hidden 
                transition-opacity 
                duration-300
                ${isOpen ? 'opacity-100' : 'opacity-0'}
                ${isVisible ? 'visible' : 'invisible'}
            `}
            onClick={handleBackdropClick}
            onKeyDown={() => {}}
            tabIndex={0}
        >
            <div
                className={`
                    min-w-[375px]
                    bg-app-main
                    h-full
                    rounded-l-xl
                    transition-transform
                    duration-300
                    ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {children}
            </div>
        </button>
    );
};

export default Drawer;
