import Link from 'next/link';
import React from 'react'

interface User {
    id : number;
    name : string;
    email : string;
};

interface Props {
    sortOrder ?: string;
    sort ?: string;
};

const objectSort = (array : any, base : string, sort : string) => {
    return array?.toSorted((acc : any, curr : any) => {
        if(sort === 'asc') return acc[base]?.localeCompare(curr[base]);
        else return curr[base]?.localeCompare(acc[base]);
    });
};

const UserTable = async (props : Props) => {

    const sortOrder = props?.sortOrder || 'name';
    const sort = props?.sort || 'asc';

    console.log('sort =>', sort)

    const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache : 'no-store'});
    const users : User[] = objectSort(Array.from(await result.json()) as User[], sortOrder, sort);

  return (
    <table>
        <thead>
            <tr>
                <th><Link href='/users?sortOrder=name'>Name</Link></th>
                <th><Link href='/users?sortOrder=email'>Email</Link></th>
            </tr>
        </thead>
        <tbody>
            {users?.map(v => <tr key={v.id}>
                                        <td>{v.name}</td>
                                        <td>{v.email}</td>
                                    </tr>)}
        </tbody>
    </table>
  )
}

export default UserTable