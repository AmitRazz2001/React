import React from 'react'
import { useEffect } from 'react'
import { Container, PostCard } from '../components'
import { useDispatch, useSelector} from 'react-redux'
import {fetchPostsAsync} from '../store/postSlice'

function Home() {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authReducer.status)
    let userId = ""
    if(isAuthenticated){
        userId = useSelector((state) => state.authReducer.userData.$id)
    }
    
    const posts = useSelector((state) => state.postReducer.posts);

    useEffect(() => {
        if(userId){
            dispatch(fetchPostsAsync());
        }
    }, [userId,dispatch])

  if(!isAuthenticated){
    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
  }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {posts.length === 0 ? 
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500 text-center'>
                            No Posts are there..Please create a post!
                        </h1>
                    </div>
                : posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home