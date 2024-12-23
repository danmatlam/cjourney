const Logo = () => {
    const start = 'UStories.';
    const middle = 'me';

    return (
        <a href='/' className='flex items-center  w-full h-full'>
            <div className='text-s2 tracking-tighter font-bold  '>
                <span className='bg-gradient-to-r from-primary-main via-blue-500 to-red-400 text-transparent bg-clip-text'>
                    {` ${start} `}
                </span>
                <span>{middle}</span>
            </div>
        </a>
    );
};

export default Logo;
