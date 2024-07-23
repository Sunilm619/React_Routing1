import React from 'react'
import Nav from '../Nav/Nav'

function Home() {
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center'>
                <img src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png" alt="home" />
                <h1 className='text-4xl mt-5'>Home</h1>
            </div>
        </div>
    )
}

export default Home