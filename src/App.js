import {useState,useRef} from 'react'
let App=()=>{
  let [data,setData]=useState("")
  let t1=useRef()
 let fun=()=>{
  setData(t1.current.value)
  t1.current.value=""
 }
  return(
    <div>
      <input type='text' ref={t1}/><button onClick={fun}>getData</button>
      <div>{data}</div>
    </div>
  )
}
export default App