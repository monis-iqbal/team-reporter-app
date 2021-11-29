import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { auth, signOut } from "../routes/Firebase";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    let navigate = useNavigate()
    
    function SignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login')
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div>
            <h1>This is Home Page</h1>
            <Button onClick={SignOut}>Logout</Button>
        </div>
    )

}

export default Home
