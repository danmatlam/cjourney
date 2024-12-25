import { api } from '../prisma.server'; // Import your Prisma client instance
import { User } from '@prisma/client'; // Import Prisma types
import { IRegisterForm } from './types.server';

export const getUsers = async (): Promise<User[]> => {
    const users = await api.user.findMany(); // Use Prisma client to fetch data
    return users;
};

export const register = async (form: IRegisterForm) => {
    const found = await api.user.count({ where: { email: form.email } });
    if (found) {
        return { error: 'User already exists', status: 400 };
    }
};
