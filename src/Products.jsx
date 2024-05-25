import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Products = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
      let fetch = async()=>{
         try {
            let response=await axios.get(`${import.meta.env.VITE_HOST}/media`)
            let data=response.data
            setItems(data)
            console.log(data)
         } catch (error) {
            console.log(error)
         }
      }
      fetch()
    },{})
  return (
    <div>
      <h1 className='text-4xl text-center text-slate-500 my-5'>Products</h1>
      {
        items.length >0 && <div className='p-5 flex justify-center flex-wrap gap-3'>
            {
                items.map((item,index)=>(
                    <Link to={`/product/${item._id}`}  key={index}>
                    <div key={index} className='border-2 rounded-xl shadow-lg p-4'>
                        <img src={item.thumbnailUrl} alt="" className='w-64' />
                        <h1 className='text-2xl text-slate-400'>{item.name}</h1>
                    </div>
                    </Link>
                ))
        }
        </div>
      }
    </div>
  )
}

export default Products
