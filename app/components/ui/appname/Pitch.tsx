interface Props {
    start: string;
    middle: string;
}
const Pitch = ({ start, middle }: Props) => {
    return (
        <div className='flex flex-col justify-center   w-full    text-center  p-9'>
            <h1 className='text-[27px] sm:text-[36px] tracking-tighter font-semibold '>
                {start}
                <span className='bg-gradient-to-r from-primary-main via-blue-500 to-red-400 text-transparent bg-clip-text'>
                    {` ${middle} `}
                </span>
            </h1>
        </div>
    );
};

export default Pitch;
