import React from 'react';
import { BsWindowSidebar } from 'react-icons/bs';

type Props = {
    children: React.ReactNode[];
};

const SSWrap: React.FC<Props> = ({ children }) => {
    const [side, main] = children;

    const peerAnimation = ` overflow-hidden transition-all duration-300 ease-in-out peer-checked:w-0 peer-checked:opacity-0 `;
    return (
        <div className='w-full flex justify-center bg-fore-main'>
            <input type='checkbox' id='checkbox-sidebar' className='peer hidden' />

            {/* Sidebar section */}
            <div
                className={`frame w-full sm:max-w-[320px] border-r-2 border-fore-main ${peerAnimation}  flex-col  hidden sm:flex sm:py-3`}
            >
                <div className='bg-app-main h-full rounded-lg relative overflow-hidden'>
                    <div className='bg-app-main h-[60px] border-b-2 border-fore-main'></div>
                    <div className='bg-app-main flex flex-col gap-3 p-3'>{side}</div>
                </div>
            </div>
            {/* Main content section */}
            <div className='frame w-full sm:max-w-[680px]  flex sm:p-3'>
                <div className='bg-app-main h-full rounded-lg relative'>
                    <div className='h-[60px] border-b-2 border-fore-main'></div>
                    <div className='flex flex-col gap-3 p-3 overflow-y-auto h-full'>{main}</div>
                    <label
                        htmlFor='checkbox-sidebar'
                        className='absolute top-0 h-[60px] w-[45px] flex items-center justify-center'
                    >
                        <BsWindowSidebar size={24} className='text-primary-main' />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SSWrap;
