import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product_card/ProductCard'
import axios from 'axios';

export default function Product() {

  const [product, setproduct]= useState ([]);

    async function getAllProducts(){
      const {data} = await axios.get('https://fakestoreapi.com/products')
      setproduct(data)
      
    }
      useEffect(()=>{
        getAllProducts()
      },[])
  return (
    <div className='product_container'>
      {product?.map((product)=>
        <ProductCard key={product.id} title = {product.title}  image={product.image} price={product.price} id = {product.id}/>
      )}
      
    </div>
    
  )
  
}
