import type { MetaFunction } from '@remix-run/node';
import Pitch from '~/components/ui/appname/Pitch';
import SSWrap from '~/components/ui/wraps/SSWrap';
import UsersData from '~/components/ui/auth/UsersData';

export const meta: MetaFunction = () => {
    return [{ title: 'Register' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
    return (
        <SSWrap>
            <div className=' max-w-full sm:w-[475px] mx-auto flex flex-col p-3 h-full pb-12'>
                <Pitch start='User' middle='Data' className='p-9 text-s6' />
                <UsersData />
            </div>

            <div></div>
        </SSWrap>
    );
}
