import type { MetaFunction } from '@remix-run/node';
import GoogleSignUp from '~/components/ui/auth/GoogleSignUp';
import RegisterForm from '~/components/ui/auth/RegisterForm';
import Pitch from '~/components/ui/appname/Pitch';
import Divider from '~/components/ui/dialogs/Divider';
import SSWrap from '~/components/ui/wraps/SSWrap';

export const meta: MetaFunction = () => {
    return [{ title: 'Register' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
    return (
        <SSWrap>
            <div className=' max-w-full sm:w-[475px] mx-auto flex flex-col p-3 h-full pb-12'>
                <Pitch start='Register' middle='' className='p-9 text-s6' />

                <RegisterForm />
                <Divider className='p-6'>Or</Divider>
                <GoogleSignUp />
            </div>

            <div></div>
        </SSWrap>
    );
}
