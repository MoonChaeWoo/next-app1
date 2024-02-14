'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  const { status, data: session } = useSession();

  if(status === 'loading'){
    return (<div>...잠시만 기다려 주세요 로그인 중입니다</div>)
  }

  return (
    <div className='flex'>
        <Link href='/' className='m-5'>NextJs</Link>
        <Link href='/users' className='m-5'>Users</Link>
        <Link href='/admin' className='m-5'>Admin</Link>
        {status === 'authenticated' && <div>
                                        <div>{session.user!.name}</div>
                                        <Link href='/api/auth/signout' className='m-5'>Logout</Link>
                                      </div>}
        {status === 'unauthenticated' && <Link href='/api/auth/signin' className='m-5'>Google Login</Link>}
    </div>
  )
}

export default NavBar