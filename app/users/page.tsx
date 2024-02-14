// import TimeInterval from '@/components/TimeInterval';
import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
  searchParams ?: {
    sortOrder ?: string;
    sort ?: string;
  };
};

const UserPage = (props : Props) => {
  return (
    <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
        {/* <TimeInterval/> */}
        <Link href='/users/new' className='btn btn-primary'>new User</Link>
        <div>This is UserPage</div>
        <Suspense fallback={<p>Loading...</p>}>
          <UserTable sortOrder={props.searchParams?.sortOrder} sort={props.searchParams?.sort}/>
        </Suspense>
    </div>
  )
}

export default UserPage;