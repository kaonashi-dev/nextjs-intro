"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation';

interface User {
   id: number;
   email: string;
   first_name: string;
   last_name: string;
   avatar: string;
}

type Props = {
   users: Array<User>;
}

const Users: FC<Props> = ({ users }) => {

   const router = useRouter();

   return (
      <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((user: any) => (
               <div key={user.id} onClick={() => {
                  router.push(`/user/${user.id}`);
               }} className="container mx-auto my-4 p-4 border border-gray-300 rounded-lg shadow-md">
                  <p className="text-lg font-semibold">{user.first_name} {user.last_name}</p>
                  <p className="text-gray-500">{user.email}</p>
                  <img className="my-4 rounded-full" src={user.avatar} alt={user.first_name} />
               </div>
            ))}
         </div>
      </>
   )
}

export default Users;