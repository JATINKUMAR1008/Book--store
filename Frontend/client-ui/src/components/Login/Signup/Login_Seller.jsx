import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import "./login-style.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login_Seller = ({login,handleLogin,userdata,get_User,setUser,setUserdata}) => {
    const navigate = useNavigate()
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState(null);
  const [data,setData] = useState(null);
  var user = {}
  const handleSubmit = async() => {
  
    console.log(`Username: ${username}, Password: ${password}`);
    
   
    
  };

  const Fetch_user = async()=>{
      
    try{
      const response = await axios.get(`http://${process.env.REACT_APP_API_ADDRESS}:5000/user-seller/${username}`)
        console.log(`${username} ${password}`)
        user = await response.data
        console.log(user.password)
        if(user.password === password){
          setUserdata(user)
          console.log(userdata)
          window.localStorage.setItem('userdata',JSON.stringify(user))
          Check_Credential()
        }else{
          console.log("invalid")
          setMessage("Invalid Credentials")
        }
        
        
        
        
      
    }catch(error){
      setMessage("Invalid Credentials")
    }
      
    
   
   
  }
  const Check_Credential = () =>{
    
      console.log(userdata)
      navigate('/')
      handleLogin()
    
  }
  return (
    <div className="l-cont">
    <div className="login-form-container">
      <h1>Login Seller{"'"}s</h1>
      <div className="form">
        <label>
          Username</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="login-input"/>
        
        <label>
          Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="login-input"/>
        
        <button type="submit" className="login-button" onClick={Fetch_user}>Login</button>
      </div>
      <div className="login-options">
        {message}
        <hr />
        <Link to="/signup_seller">
        <span>Or New Seller?</span>
        {"   "}SignUp NOW!</Link>
      </div>
    </div>
    </div>
  )
}

export default Login_Seller