import React, { useState } from 'react'

const BlogFilter = ({ postQuery, laters, setSerchParams }) => {
    const [search, setSearch] = useState(postQuery)
    const [checked, setChecked] = useState(laters)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target

        const query = form.search.value
        const isLaters = form.laters.checked

        const params = {}


        if (query.length) params.post = query
        if (isLaters) params.laters = true

        setSerchParams(params)
    }
    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input type="search" name='search' value={search} onChange={e => setSearch(e.target.value)} />
            <label style={{ padding: '0 1rem' }}>
                <input type="checkbox" name='laters' checked={checked} onChange={e => setChecked(e.target.checked)} /> New only
            </label>
            <input type="submit" name='Search' />
        </form>)
}

export default BlogFilter