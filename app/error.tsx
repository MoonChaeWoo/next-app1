"use client"
import React from 'react';

interface Props{
    error : Error;
    reset : () => void;
}

const ErrorPage = ({error, reset} : Props) => {

    console.log('Error => ', error)

  return (
    <div>
        <h1>예상치 못한 에러가 발생하였습니다</h1>
        <button className='btn' onClick={() => reset()}>reset</button>
    </div>
  )
}

export default ErrorPage