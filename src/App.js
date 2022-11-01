import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Social from './Components/SocialMedia/Social';



function App() {
  const[cartdata,setcartdata] = useState([])

  const addtocart = (data) => {
    setcartdata([...cartdata,{data}]);
  }
 
  return (
   <>
    <Header cartdata={cartdata}/>
    <Product addtocart={addtocart}/>
    <Social/>
    <Footer/>
   </> 
  )
}

export default App;
