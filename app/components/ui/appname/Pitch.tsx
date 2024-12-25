interface Props {
    start: string;
    middle: string;
    className?: string;
}
const Pitch = ({ start, middle, className }: Props) => {
    return (
        <div className={`flex flex-col text-center text-s3 ${className}`}>
            <h1 className='tracking-tighter font-semibold '>
                <span className='bg-gradient-to-r from-primary-main via-blue-500 to-red-400 text-transparent bg-clip-text'>
                    {start}
                </span>
                <span className=''>{` ${middle} `}</span>
            </h1>
        </div>
    );
};

export default Pitch;
