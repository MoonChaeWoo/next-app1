import React from 'react'

interface Props {
    params : {
        username : string[];
    };
    searchParams ?: {sortOrder : string};
}

const ProfilePage = (props : Props) => {
  const {params : {username}, searchParams} = props;
  let sortOrder = searchParams ? searchParams.sortOrder : null;
  return (
    <div>
        <h1>ProfilePage</h1>
        <ul>
            {username.map((name : string, index : number) => <li key={index}>{name}</li>)}
        </ul>
    </div>
  )
}

export default ProfilePage