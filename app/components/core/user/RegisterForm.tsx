import { useForm } from 'react-hook-form';
import { Checkbox, Form, Input, Button } from 'antd';

import { FormItem } from 'react-hook-form-antd';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Required' }),
    password: z.string().min(1, { message: 'Required' }),
    confirmPassword: z.string().min(1, { message: 'Required' }),
    remember: z.boolean(),
});

const RegisterForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: { email: '', password: '', confirmPassword: '', remember: true },
        resolver: zodResolver(schema),
    });

    return (
        <div>
            <Form
                layout='vertical'
                onFinish={handleSubmit((data) => {
                    console.log(data);
                })}
                className='justify-center items-center flex flex-col h-full'
            >
                <div className='w-[450px] max-w-full'>
                    <FormItem control={control} name='email' label='Email'>
                        <Input />
                    </FormItem>
                    <FormItem control={control} name='password' label='Password'>
                        <Input.Password />
                    </FormItem>
                    <FormItem control={control} name='confirmPassword' label='Confirm Password'>
                        <Input.Password />
                    </FormItem>
                    <FormItem control={control} name='remember' valuePropName='checked'>
                        <Checkbox>Remember me</Checkbox>
                    </FormItem>
                </div>
                <div className='absolute bottom-0 left-0 right-0 flex items-center w-full justify-center'>
                    <Form.Item className='w-[450px]'>
                        <Button type='primary' htmlType='submit' block size='large'>
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
            <DevTool control={control} />
        </div>
    );
};

export default RegisterForm;
