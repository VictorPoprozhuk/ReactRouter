import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


const SinglePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)



    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))

        const timer = setInterval(() => {
            setLoading(false)

        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [id])


    return (
        <>
            <button type='button' onClick={goBack}>Go back</button>
            {loading ?
                <div className="lds-ripple"><div></div><div></div></div>
                : <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/blog/${id}/edit`}>back to blog</Link>
                </>}
        </>
    )
}

export { SinglePage }