import React,{useState} from 'react'
import fire from './fire'
import {getAuth,signInWithEmailAndPassword,
    createUserWithEmailAndPassword} from 'firebase/auth'
const auth=getAuth()
export default function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function login(){
        signInWithEmailAndPassword(auth,username,password)
            .then((usercredentials)=>
                console.log(usercredentials)
            )
            .catch((error)=>{
                alert(error)
                console.log(error)
            })
    }
    function register(){
        createUserWithEmailAndPassword(auth,username,password)
            .then((usercredentials)=>{
                console.log(usercredentials)
            })
            .catch((error)=>{
                alert(error)
                console.log(error)
            })
    }
  return (
    <div className='login-page'>
        <p>
            <input
                type="email" 
                placeholder='Enter username' 
                onChange={(e)=>setUsername(e.target.value)}/>
        </p>
        <p>
            <input
                type="password"
                placeholder='Enter Password'
                onChange={(e)=>setPassword(e.target.value)}/>
        </p>
        <button className='btn-login' onClick={login}>Login</button>
        <p>Dont have an account? <span className='btn-register' onClick={register}>Register</span></p>
    </div>
  )
}
