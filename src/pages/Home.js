import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const Home = () => {
    
    return (
        <div>
            <h1>This is Home Page</h1>
            <Link to="/login">Logout</Link>
        </div>
    )

}

export default Home
