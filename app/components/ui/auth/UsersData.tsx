import { useEffect, useState } from 'react';
import { User } from '@prisma/client';
import { JSONTree } from 'react-json-tree';
import { getUsers } from '~/utils/api/user/auth.server';

const UsersData = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <JSONTree data={users} />
            {users.map((user, index) => (
                <div key={index}>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersData;
