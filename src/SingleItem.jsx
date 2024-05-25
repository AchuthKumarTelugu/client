import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleItem = () => {
    let {id}=useParams()
    const [item, setItem] = useState({})
    useEffect(()=>{

        let fetch = async()=>{
            try {
               let response=await axios.get(`${import.meta.env.VITE_HOST}/media/${id}`)
               let data=response.data
               setItem(data)
               console.log(data)
            } catch (error) {
               console.log(error)
            }
         }
         fetch()
    },[])
  return (
    <div>
       <h1 className=' text-2xl md:text-4xl text-center text-slate-500 my-2 md:my-5'>single Item</h1>
       {
        Object.keys(item).length>0 && <div className='p-5 flex w-[70%] mx-auto flex-col md:flex-row'> 
            <div className="video w-full md:w-1/2">

            <video src={item.videosUrl} controls autoPlay className='w-full' />
            </div>
            <div className='flex w-full md:w-1/2 justify-center items-center gap-y-4 flex-col py-4 md:py-0'>
            <h1 className='text-xl md:text-4xl text-slate-400 font-semibold'>{item.name}</h1>
            <p className='text-lg md:text-2xl  '>{item.description}</p>
            </div>
            </div>
       }
    </div>
  )
}

export default SingleItem
