import { FcGoogle } from 'react-icons/fc';
import Pitch from '~/components/ui/appname/Pitch';
const GoogleSignUp = () => {
    return (
        <button className=' rounded-lg  p-3 gap-3 flex items-center mx-auto px-3'>
            <Pitch start='Enter with' middle='Google' textClass=' text-s3  ' />
            <FcGoogle size={24} />
        </button>
    );
};

export default GoogleSignUp;
