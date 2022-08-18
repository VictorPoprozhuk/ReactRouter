import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BlogFilter from './BlogFilter'


const Blog = () => {
    const [posts, setPosts] = useState([])
    const [serchParams, setSerchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)

    const postQuery = serchParams.get('post') || '';
    const laters = serchParams.has('laters')

    const startForm = laters ? 80 : 1

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data)).then(() => setLoading(false))


    }, [])

    return (
        <>
            <h1>SinglePage</h1>
            <BlogFilter
                setSerchParams={setSerchParams}
                postQuery={postQuery}
                laters={laters} />
            <Link to='/blog/new' style={{ margin: '1rem 0', display: 'inline-block' }}>Add new post</Link>
            {loading ? <div className="lds-ripple"><div></div><div></div></div> : posts.filter(
                post => post.title.includes(postQuery) && post.id >= startForm
            ).map((post) =>
                <Link key={post.id} to={`/blog/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            )}
        </>
    )
}

export default Blog