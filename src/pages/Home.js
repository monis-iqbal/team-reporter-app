import React from 'react'
import { Button } from 'antd';
const Home = () => {
    const logoutHandler=()=>{
        window.location.href = "/";
    }
    return (
        <div>
            <h1>This is Home Page</h1>
            <Button onClick={logoutHandler}type="logout">Logout</Button>
        </div>
    )

}

export default Home
