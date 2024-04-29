import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, PostCard } from '../components'
import { fetchPostsAsync } from '../store/postSlice'


function AllPost() {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authReducer.status)
    let userId = ""
    if(isAuthenticated){
        userId = useSelector((state) => state.authReducer.userData.$id)
    }
    const posts = useSelector((state) => state.postReducer.posts)
    
    useEffect(() => {
        if(userId){
            dispatch(fetchPostsAsync());
        }
    }, [userId, dispatch])

  return (
    
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {posts?.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost