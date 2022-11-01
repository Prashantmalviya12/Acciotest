import React, { useState } from 'react'
import './Product.css'


function Product({addtocart}) {
    const allItem = []
    const [userItem,setUserItem] = useState([])
  
    fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      for(const dataItem in data){
        allItem.push({newPrice: data[dataItem].newPrice,oldPrice:data[dataItem].oldPrice,
         productImage:data[dataItem].productImage, productName:data[dataItem].productName})
      setUserItem(allItem);
      }
    })

    
     
    
    return (
      
      <div>
         <div >
          <h3 className='product-head'>Products</h3>
        
          <div className='product-row'>
          {
              userItem.map(prod => 
                  <div className='prod-card' key={prod.id}>
                      <div className='prod-im'>
                      <img src={prod.productImage} alt='...'/>
                      <h4 className='prod-name'>{prod.productName?prod.productName.slice(0,38):""}</h4>
                      </div>
                      <div className='prod-price'>
                        <div className='prod-star'>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
  </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
  </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
  </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
  </svg>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
  </svg>
  
                        </div>
                      <p className='prod-oldprice'>{prod.oldPrice}/-</p>
                      <p className='prod-newprice'>{prod.newPrice}/-</p>
                      </div>
                      <button className='prod-btn' onClick={()=> addtocart(prod)} >Add to Cart</button>
                  </div>
                  )
          }
       </div>
        
         </div>
      </div>
    )
}

export default Product
