import { useForm } from 'react-hook-form';
import { Input, message, Form, Button } from 'antd';

import { FormItem } from 'react-hook-form-antd';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const schema = z
    .object({
        email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Required' }),
        password: z
            .string()
            .min(8, { message: 'Min 8 letters' })
            // .regex(/[A-Z]/, 'At least one Upper Letter')
            // .regex(/[a-z]/, 'At least one Lower Letter')
            .regex(/[0-9]/, 'At least one number')
            .regex(/[^A-Za-z0-9]/, 'Add special characters ex: ->  $ ! @ # % ^ & * [ ] ( ) _ -'),
        confirmPassword: z.string().min(1, { message: 'Required' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

const RegisterForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: { email: '', password: '', confirmPassword: '', remember: true },
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data: { email: string; password: string; confirmPassword: string }) => {
        setLoading(true);
        console.log(data);
        setTimeout(() => {
            setLoading(false);
            message.success('Registration successful!');
        }, 1000); // Display the message for 4.5 seconds
    };

    return (
        <Form
            layout='vertical'
            onFinish={handleSubmit(onSubmit)}
            className='h-full w-full relative  flex flex-col justify-between  '
        >
            <div>
                <FormItem control={control} name='email' label='Email'>
                    <Input />
                </FormItem>
                <FormItem control={control} name='password' label='Password'>
                    <Input.Password />
                </FormItem>
                <FormItem control={control} name='confirmPassword' label='Confirm Password'>
                    <Input.Password />
                </FormItem>
            </div>
            <Button type='primary' htmlType='submit' block size='large' loading={loading}>
                Register
            </Button>
            <DevTool control={control} />
        </Form>
    );
};

export default RegisterForm;
