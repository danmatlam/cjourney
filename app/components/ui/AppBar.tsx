import Logo from './appname/Logo';

export type AppBarProps = {
    title?: string;
};

const AppBar = ({ title }: AppBarProps) => {
    return (
        <nav className='h-[60px] flex flex-col relative px-3'>
            <div className='flex  h-full items-center '>
                <div className=' flex items-center justify-center h-full '>
                    <Logo />
                </div>
                <div className='w-6/12 flex justify-center text-s2 font-bold h-full items-center'>
                    {title}
                </div>
                <div className='flex-grow'></div>
            </div>

            <span className='w-full h-[2px] bg-gradient-to-r from-primary-main via-blue-500 to-red-400 absolute bottom-0 left-0 right-0 ' />
        </nav>
    );
};

export default AppBar;
