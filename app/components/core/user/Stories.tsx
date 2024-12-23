const Stories = () => {
    return (
        <div className='flex flex-col gap-3 h-full'>
            <h1 className='text-s4 '>Meet the stories</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3  pb-24'>
                {storiesData.map((story, index) => (
                    <div
                        key={index}
                        className='sm:min-h-[150px] bg-fore-main rounded-lg overflow-hidden flex flex-col  to-fore-main transition-all duration-500 ease-in-out'
                    >
                        <div className='flex w-full items-center justify-between  p-2 border-b-2 border-b-app-main'>
                            <span className='text-s1'>{story.emoji}</span>
                            <h2 className='text-s2 font-bold'>{story.title}</h2>
                        </div>
                        <div className='p-2'>
                            <p className='text-s1'>{story.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stories;

const storiesData = [
    {
        title: 'Google Maps Search',
        emoji: '🔍📍',
        description:
            'A journey that begins with an online search ("*profession* near me") and leads to booking the first consultation through the app.',
    },

    {
        title: 'Content to Appointment',
        emoji: '📲 📅',
        description:
            'The path from discovering through social media posts to booking the first session.',
    },
    {
        title: 'Frictionless Return',
        emoji: '🔄🌟',
        description:
            'The story of regular clients who receive reminders and enjoy a streamlined rebooking process.',
    },
    {
        title: 'Word of Mouth',
        emoji: '🗣️➡️👂',
        description:
            'The customer route that starts from a referral by another patient and leads to a new consultation.',
    },
];
