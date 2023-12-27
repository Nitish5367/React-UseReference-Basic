import  {BrowserRouter,Route,Routes}from 'react-router-dom'
import { useState } from 'react'
import Nav from './Nav'
import Product from './Product'
import Cart from './Cart'
import Gc from './Gc'

let App=()=>{
  let [cart,setCart]=useState([])
  let [ctotal,setctotal]=useState(0)

  let addprod=(item)=>{
  /* let x=cart.filter((prod)=>item.id==prod.id)
   if(x.length==0){
    setCart([...cart,{...item,"qty":1,'total':item.price}])
   }*/
   let x=cart.filter((prod,index)=>{
    if(item.id==prod.id){
      incqty(index)
      return true
    }
    else{
      return false
    }
   })
   if (x.length==0){
    setCart([...cart,{...item,'qty':1,"total":item.price}])
    setctotal(ctotal+item.price)
   }
  }
  let incqty=(index)=>{
    if(cart[index].qty<5){
      cart[index].qty++
      cart[index].total+=cart[index].price
      setctotal(ctotal+cart[index].price)
      setCart([...cart])
    }
  }
  let decqty=(index)=>{
    if(cart[index].qty>1){
      cart[index].qty--
      cart[index].total-=cart[index].price
      setctotal(ctotal-cart[index].price)
      setCart([...cart])
    }
  }
  let del=(index)=>{
    setctotal(ctotal-cart[index].total)
    cart.splice(index,1)
    setCart([...cart])
  }
  let obj={"addprod":addprod,"data":cart,"incqty":incqty,"decqty":decqty,"del":del,"ctotal":ctotal}
  return(
    <BrowserRouter>
    <Gc.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Product/>}/>
    <Route path='/cart'element={<Cart/>}/>
    </Routes>
    </Gc.Provider>
    </BrowserRouter>
  )
}
export default App