import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import GlobalSpinner from '../GlobalSpinner'


function Github() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/AmitRazz2001')
//     .then(response => response.json())
//     .then((data) => setData(data))
//   }, [])
  
  const data = useLoaderData()
  const navigation = useNavigation()
  return (
    <>
        {navigation.state === "loading" && <GlobalSpinner />}
        <div className='rounded-lg bg-gray-600 text-center text-3xl text-white m-4 p-5'>Github Followers: {data.followers}
            <img className='rounded-md' src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    </>
  )
}

export default Github

export const GithubAccuontInfo = async () => {
    const response = await fetch('https://api.github.com/users/AmitRazz2001')
    return response.json();
}