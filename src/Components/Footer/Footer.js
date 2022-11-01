import React, { useState } from 'react'
import './Footer.css'

function Footer() {
    const[userData,setUserData] = useState('')

    const handletodata = (event) =>{
     setUserData(event.target.value);
    }
 
    const handleToAddData = (event) =>{
     event.preventDefault();

     if(userData === ""){
        return;

     }

     fetch('https://textsubs-486ae-default-rtdb.asia-southeast1.firebasedatabase.app/subscribed.json',
     {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
             Email: userData,
         })
     })
     .then(res => res.json())
     .then(data => console.log(data))
 
     setUserData(" ");
    }
 
 
     
   return (
     <div className='footer-main1'>
       
      <div className='footer-main'>
       <div className='subs'>
         <h5>Company Info</h5>
         <ul>
             <li>
                 <a href='/'>about us</a>
             </li>
             <li>
                 <a href='/'>Carrier</a>
             </li>
             <li>
                 <a href='/'>We are hiring</a>
             </li>
             <li>
                 <a href='/'>Blog</a>
             </li>
         </ul>
       </div>
       <div className='subs'>
         <h5>Legal</h5>
         <ul>
             <li>
                 <a href='/'>about us</a>
             </li>
             <li>
                 <a href='/'>Carrier</a>
             </li>
             <li>
                 <a href='/'>We are hiring</a>
             </li>
             <li>
                 <a href='/'>Blog</a>
             </li>
         </ul>
       </div>
       <div className='subs'>
         <h5>Features</h5>
         <ul>
             <li>
                 <a href='/'>Bussiness Market </a>
             </li>
             <li>
                 <a href='/'>User Analytic</a>
             </li>
             <li>
                 <a href='/'>Live Chat</a>
             </li>
             <li>
                 <a href='/'>Unlimited Support</a>
             </li>
         </ul>
       </div>
       <div className='subs'>
         <h5>Company Info</h5>
         <ul>
             <li>
                 <a href='/'>IOS & Android</a>
             </li>
             <li>
                 <a href='/'>Watch a Demo</a>
             </li>
             <li>
                 <a href='/'>Customers</a>
             </li>
             <li>
                 <a href='/'>API</a>
             </li>
         </ul>
       </div>
       <div className='subs '>
         <h5>Get In Touch</h5>
         <div className='email subs2'>
         <input type='text' placeholder='Your Email' onChange={handletodata} />
         <button onClick={handleToAddData}>Subscribe</button>
         <p>Lorem impsum dolor amit</p>
         </div>
       </div>
     </div>
         <div className='finisher'>
       Made With ❤️ at Acciojob
     </div>
     </div>
     
   )
}

export default Footer
