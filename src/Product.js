import axios from 'axios'
import { useState,useEffect, useContext } from 'react'
import './Product.css'
import Gc from './Gc'
let Product=()=>{
    let [data,setData]=useState([])
    let props=useContext(Gc)
    useEffect(()=>{
        axios.get("https://dummyjson.com/products?limit=100").then((res)=>{
            setData(res.data.products)
        })
    },[])
    
    return(
        <div className='Products'>
            {
                data.map((item)=>{
                    return(
                        <div className='card'>
                            <div className='pimg'><img src={item.images[0]}/></div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <h2>{item.price}</h2>
                            <button onClick={()=>props.addprod(item)}>AddCart</button>
                        </div>
                    )
                })
            }
        </div>
    )
   
}
export default Product