import React, { Component } from 'react'
import {getAuth,signOut} from 'firebase/auth'
import {Navigate} from 'react-router-dom'
const auth=getAuth()
export default class Logout extends Component {
    componentDidMount(){
            signOut(auth)
              .then((res)=>{
                console.log(res)
              })
              .catch((error)=>{
                console.log(error)
              })
    }
  render() {
    return auth? <Navigate to="/"/>:<Navigate to="/login"/>
  }
}
