import React from 'react'

interface Props {
    params : {
        id : number;
        photoId : number;
    };
}

const PhotoPage = (props : Props) => {
    const {id, photoId} = props.params;
  return (
    <div>PhotoPage id : {id}, photooId : {photoId}</div>
  )
}

export default PhotoPage