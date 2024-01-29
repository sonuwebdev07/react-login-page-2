import React, { useState } from 'react'
import './login.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const [state,setState]=useState({
        email_id:'',
        pass:''
    })

    const handler=(event)=>{
        const{name,value}=event.target;
        setState({...state,[name]:value});
    }

    const saveData=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:3004/save",state)
        .then((res)=>{
            toast.success("Data Send SuccessFully !!")
        })
    }


  return (
    <div className="container">
            <div className="screen">
                <div className="screen_content">
                <Toaster/>
                    <form className="login" onSubmit={saveData} method='post'>
                        <div className="login_field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" placeholder="Username/Email" name='email_id' onChange={handler} />
                        </div>
                        <div className="login_field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" placeholder="Password" name='pass' onChange={handler} />
                        </div>
                        <div className="login_field">
                            <input type="submit" value="Log In Now" />
                            <span><i className="button__icon fas fa-chevron-right"></i></span>
                        </div>
                    </form>
                    <div className="screen_background">
                        <span className="screen_background_shape screen_background_shape1"></span>
                        <span className="screen_background_shape screen_background_shape2"></span>
                        <span className="screen_background_shape screen_background_shape3"></span>
                        <span className="screen_background_shape screen_background_shape4"></span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
