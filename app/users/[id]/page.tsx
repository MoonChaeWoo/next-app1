import React from 'react';
import { notFound } from 'next/navigation';

interface Props {
    params : {id : number};
};

const UserDetailPage = (/*props*/{params : {id}} : Props) => {
    // const param = props.params;
    // console.log('props => ', param);
    // console.log('param.id => ', param.id);
  if(id > 10) notFound();

  return (
    <div>UserDetailPage{id}</div>
  )
}

export default UserDetailPage