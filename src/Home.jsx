import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [formData, setFormData] = useState({
    name: '', description: '', thumbnail: null, videos: null
  })
  const handleForm = async (e) => {
    e.preventDefault()
    console.log(formData)
    let formDataObj = new FormData()//is used to send data to backend server
    formDataObj.append('name', formData.name)
    formDataObj.append('description', formData.description)
    formDataObj.append('thumbnail', formData.thumbnail)
    formDataObj.append('videos', formData.videos)
    console.log(formDataObj)

    for (let [key, value] of formDataObj.entries()) {
      console.log(`${key}:${value}`)
    }

    try {
      let response = await axios.post(`${import.meta.env.VITE_HOST}/upload`, formDataObj)
      console.log('response.data', response.data)
      setFormData({
        name: '', description: '', thumbnail: null, videos: null
      })
    } catch (error) {
      console.log(error)
    }
console.log('hello boys')
  }
  useEffect(() => {
    console.log(import.meta.env.VITE_HOST)
  }, [])
  return (
    <div>
      <div className="user-form w-1/2 mx-auto py-5 flex flex-col items-center bg-slate-200 rounded my-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-slate-500 py-4">Welcome to the Home Page</h1>
        <form className='flex flex-col items-center gap-y-4 ' onSubmit={handleForm}>
          <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder='enter title' name='title' className=' mx-4  w-full border-2  px-2 py-1 rounded border-slate-300' />
          <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} name="description" id="" cols="30" rows="10" className='border-2 focus:outline-none w-full px-2 py-1 rounded border-slate-300 ' placeholder='enter description'></textarea>
          <div className="input-media flex ">
            <div className="input-thumbnail flex flex-col items-start">
              <label htmlFor="thumbnail" className='text-xl text-slate-400'>Thumbnail:</label>
              <input
                type="file"
                accept="image/jpeg,image/png"
                name='thumbnail'
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.files[0] })}
              />
            </div>
            <div className="input-thumbnail flex flex-col items-start">
              <label htmlFor="videos" className='text-xl text-slate-400'>Video:</label>
              <input
                type="file"
                accept="video/mpg,video/avi,video/mp4"
                name='videos'
                onChange={(e) => setFormData({ ...formData, videos: e.target.files[0] })}
              />
            </div>
          </div>
          <button type='submit' className='text-xl  border-2 border-slate-300 px-4 py-2 rounded text-slate-400 shadow-lg hover:shadow-none font-semibold'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Home
