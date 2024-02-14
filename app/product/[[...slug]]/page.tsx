import React from 'react'

interface Props{
    params : {
        slug : string[]
    };
    searchParams ?: {sortOrder : string};
}

const ProductPage = (props : Props) => {
    console.log('props => ', props)
    const {params : {slug}, searchParams} = props;
    const sortOrder = searchParams ? searchParams.sortOrder : undefined;

  return (
    <div>
        <h1>ProductPage</h1>
        <ul>
            {slug?.map((value : string, index : number) => <li key={index}>slug : {value}</li>)}
        </ul>
        <div>sortOrder : {sortOrder}</div>
    </div>
  )
}

export default ProductPage