import React from 'react'
import Navbar from './Navbar'
import img1 from '../image/none.png' 
import './Header.css'


function Header({cartdata}) {
  return (
    <>
      <Navbar cartdata={cartdata} />
      <div className='header-main'>
    <div className='header-all'>
    <h5 className='header-sum'>Summer 2022</h5>
    <h1 className='header-coll'>NEW COLLECTION</h1>
    <h4 className='header-para'>We Know how large object will act.
        But thing on a small scale.
    </h4>
    <button className='header-btn'>Shop Now</button>
    </div>
    <div className='header-img'>
      <img src={img1} alt='...' />
    </div>

    </div>
    </>
  )
}

export default Header
