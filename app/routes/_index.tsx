import type { MetaFunction } from '@remix-run/node';
import Pitch from '~/components/ui/appname/Pitch';
import Stories from '~/components/core/user/Stories';
import SSWrap from '~/components/ui/wraps/SSWrap';
import GButton from '~/components/ui/buttons/GButton';

export const meta: MetaFunction = () => {
    return [{ title: 'First tasks' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
    return (
        <SSWrap drawerTrigger=' About'>
            <div>
                <Pitch start='Digital' middle='Toolkit for Therapists and Counselors' />
                <div className='p-3 pb-12'>
                    <Stories />
                </div>
                <div className=' absolute bottom-0 left-0 right-0 p-3'>
                    <GButton href='/register' size='large'>
                        Start now 🚀
                    </GButton>
                </div>
            </div>
            <div className='flex flex-col h-full justify-end pb-4 px-2 absolute w-full'></div>
        </SSWrap>
    );
}
