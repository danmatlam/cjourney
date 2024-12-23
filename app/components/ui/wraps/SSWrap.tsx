import React from 'react';
import AppBar from '../AppBar';
import SideWrap from './SideWrap';

import GButton from '../buttons/GButton';
import SideBarIcon from './SideBarIcon';

interface Props {
    children: React.ReactNode[];
    drawerTrigger?: string;
    title?: string;
}

const SSWrap: React.FC<Props> = ({ title, children, drawerTrigger }) => {
    const [main, side] = children;
    const peerAnimation =
        'overflow-hidden transition-all duration-300 ease-in-out peer-checked:w-0 peer-checked:opacity-0';

    return (
        <>
            <div className='w-full flex flex-row justify-center bg-fore-main gap-3 frame'>
                <input type='checkbox' id='checkbox-sidebar' className='peer hidden' />

                <div className='frame w-full  sm:max-w-[680px] flex sm:py-3 relative '>
                    <div className='bg-app-main h-full sm:rounded-lg relative overflow-hidden w-full'>
                        <AppBar title={title} />
                        <div className='flex flex-col gap-3 overflow-y-auto h-full'>{main}</div>
                        <label
                            htmlFor='checkbox-sidebar'
                            className='absolute top-0 right-0 h-[60px]  items-center justify-center cursor-pointer hidden sm:flex px-2'
                        >
                            {drawerTrigger ? <GButton>{drawerTrigger}</GButton> : <SideBarIcon />}
                        </label>
                        <SideWrap drawerTrigger={drawerTrigger}>{side}</SideWrap>
                    </div>
                </div>

                <div
                    className={`frame w-full sm:max-w-[375px] border-r-2 border-fore-main ${peerAnimation} flex-col hidden sm:flex sm:py-3`}
                >
                    <div className='bg-app-main h-full rounded-lg relative overflow-hidden flex flex-col'>
                        <div className='h-[60px] border-b-2 border-fore-main'></div>
                        <div className='flex-1 flex flex-col gap-3 p-3'>{side}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SSWrap;
