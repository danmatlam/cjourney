import type { MetaFunction } from '@remix-run/node';
import { BsWindowSidebar } from 'react-icons/bs';

export const meta: MetaFunction = () => {
    return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
    const titles = [
        {
            title: 'De Búsqueda a Primera Cita',
            description:
                'Journey que comienza con una búsqueda online ("  *profesión* cerca de mí") hasta completar la primera consulta a través de la aplicación.',
        },
        {
            title: 'De Primerizo a Cliente Fiel',
            description:
                'Proceso de transformación desde la primera consulta hasta convertirse en un cliente recurrente',
        },
        {
            title: 'Del Contenido a la Consulta',
            description:
                'Recorrido desde el descubrimiento a través de redes sociales hasta la reserva de la primera sesión.',
        },
        {
            title: 'Retorno Sin Fricción',
            description:
                'Historia de clientes habituales, recordatorios y proceso de reserva simplificado.',
        },

        {
            title: 'Descubrimiento por Recomendación',
            description: 'Ruta del cliente que llega por referencia de otro paciente.',
        },
    ];

    const peerAnimation = ` overflow-hidden transition-all duration-300 ease-in-out peer-checked:w-0 peer-checked:opacity-0 `;
    return (
        <div className='w-full flex justify-center bg-fore-main'>
            <input type='checkbox' id='checkbox-sidebar' className='peer hidden' />

            <div
                className={`frame bg-app-main w-full sm:max-w-[320px] border-r-2 border-fore-main  ${peerAnimation}`}
            >
                <div className='bg-app-main h-[60px] border-b-2 border-fore-main'></div>
                <div className='bg-app-main flex flex-col gap-3 p-3'></div>
            </div>
            <div className='frame bg-app-main w-full sm:max-w-[680px] relative'>
                <div className='bg-app-main h-[60px] border-b-2 border-fore-main'></div>
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

                <label
                    htmlFor='checkbox-sidebar'
                    className='absolute top-0 h-[60px] w-[45px] flex items-center justify-center '
                >
                    <BsWindowSidebar size={24} />
                </label>
            </div>
        </div>
    );
}
