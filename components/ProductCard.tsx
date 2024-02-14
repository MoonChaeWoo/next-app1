import React from 'react'
import AddToCart from './AddToCart'
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    <div className="pt-6 my-5">
        <h1>ProductCardComponent</h1>
        {/* <button onClick={() => console.log('ProductCard Add Btn')}>Add</button> */}
        <AddToCart />
    </div>
  )
}

export default ProductCard