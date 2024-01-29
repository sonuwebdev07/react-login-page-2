import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  const [state,setState]=useState({
        id:'',
        email_id:'',
        pass:''
  })

  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3004/save/"+params.id)
    .then((res)=>{
      setState(res.data);
    })
  },[])

  const handler=(event)=>{
    const {name,value}=event.target;
    setState({...state,[name]:value});
  }

  const updateData=(event)=>{
    event.preventDefault();
    axios.put("http://localhost:3004/save/"+params.id,state)
    .then((res)=>{
      navigate("/data-list")
    })
  }

  const [type,setType]=useState("password")

  const showPass=()=>{
    setType("text")
  }

  

  return (
    <>
    <div className="container">
    <div className="row">
            <div className="col-md-12 fs-2 mx-5" style={{color:"#5d54a4"}}>Update</div>
        </div>
    <div className="screen">
        <div className="screen_content">
            <form className="login" onSubmit={updateData} method='post'>
                <div className="login_field">
                    <i className="login__icon fas fa-user"></i>
                    <input type="text" placeholder="Username/Email" name='email_id' onChange={handler} value={state.email_id} />
                </div>
                <div className="login_field">
                    <i className="login__icon fas fa-lock"></i>
                    <input type={type} placeholder="Password" name='pass' onChange={handler} value={state.pass}/>
                    <Link className="btn my-3 text-light" style={{backgroundColor:"#3f3feb"}} onClick={showPass}>show password</Link>
                </div>
                <div className="login_field">
                    <input type="submit" value="Update Now" />
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
    
    </>
  )
}

export default Update
