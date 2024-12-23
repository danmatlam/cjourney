import { useState, ReactNode } from 'react';
import Drawer from '../dialogs/Drawer';
import GButton from '../buttons/GButton';
import SideBarIcon from './SideBarIcon';

interface SideWrapProps {
    drawerTrigger?: string;
    children: ReactNode;
}

const SideWrap: React.FC<SideWrapProps> = ({ children, drawerTrigger }: SideWrapProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenClose = () => setOpen(!open);

    return (
        <>
            <div className='sm:hidden absolute top-0 right-0 px-2'>
                <button onClick={() => setOpen(true)} className='h-[60px] flex items-center'>
                    {drawerTrigger ? <GButton>{drawerTrigger}</GButton> : <SideBarIcon />}
                </button>
            </div>
            <Drawer isOpen={open} onClose={handleOpenClose}>
                {children}
            </Drawer>
        </>
    );
};

export default SideWrap;
