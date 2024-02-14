"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
  const router = useRouter();
  
  const move = (url : string) => {
    router.push(url)
  }
  return (<button className='btn btn-primary' onClick={() => {move('/users')}}>Create</button>)
}

export default NewUserPage;