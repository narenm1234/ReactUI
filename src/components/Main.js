import React, { useState } from "react";
import Product from './Product'
export default function Main(props){
 const { products, onAdd} = props;

 return(
     <main>
         <h2>Products</h2>
         <hr/>
         <div className="row">
             {
                 products.map(product => (
                     <Product key={product.id}  product={product} onAdd={onAdd}></Product>

                 ))
             }
         </div>
     </main>
 )


}