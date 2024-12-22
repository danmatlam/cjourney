import type { MetaFunction } from '@remix-run/node';
import SSWrap from '~/ui/SSWrap';

export const meta: MetaFunction = () => {
    return [
        { title: 'Customer care 🛠️ 🧰 ' },
        { name: 'description', content: 'Welcome to Remix!' },
    ];
};

export default function Index() {
    const titles = [
        {
            title: 'From Search to First Appointment 📍',
            description:
                'A journey that begins with an online search ("*profession* near me") and leads to booking the first consultation through the app.',
        },
        {
            title: 'From Newcomer to Loyal Customer 💖',
            description:
                'The process of transforming from the first consultation to becoming a repeat client.',
        },
        {
            title: 'From Content to Consultation 📲',
            description:
                'The path from discovering through social media to booking the first session.',
        },
        {
            title: 'Frictionless Return 🔁',
            description:
                'The story of regular clients, reminders, and a simplified booking process.',
        },
    ];

    return (
        <SSWrap>
            <h1>Hello world</h1>
            <div className='bg-app-main flex flex-col gap-3 p-3 overflow-y-auto'>
                <h1 className='text-s6'>Historias de usuario</h1>
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className='min-h-[90px] bg-fore-main p-3 rounded-lg flex gap-3'
                    >
                        <span className='text-s3'>{index + 1}</span>
                        <div>
                            <h2 className='text-s3'>{title.title}</h2>
                            <p>{title.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <></>
        </SSWrap>
    );
}
