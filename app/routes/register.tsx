import type { MetaFunction } from '@remix-run/node';
import RegisterForm from '~/components/core/user/RegisterForm';
import { AppBarProps } from '~/components/ui/AppBar';
import Pitch from '~/components/ui/appname/Pitch';
import SSWrap from '~/components/ui/wraps/SSWrap';

export const meta: MetaFunction = () => {
    return [{ title: 'Register' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
    const appBar: AppBarProps = {
        title: 'Register',
    };
    return (
        <SSWrap appBar={appBar}>
            <>
                <Pitch start='Welcome to' middle='UStories' />
                <RegisterForm />
            </>

            <div></div>
        </SSWrap>
    );
}
