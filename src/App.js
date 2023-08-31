import React, { Component } from 'react'
import fire from './fire'
import Home from './Home'
import Login from './Login'
import './App.css'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Logout from './Logout'
import Add from './Add'
import Navigation from './Navigation'

const auth=getAuth()
export default class App extends Component {
  state={
    user:[]
  }
  componentDidMount(){
    onAuthStateChanged(auth,(user)=>{
      if(user){
        this.setState({user:user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render() {
    console.log(this.state.user)
    return (
      <div>
        {
          this.state.user ? (
            <BrowserRouter>
            <Navigation/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path="/add" element={<Add/>}/>
              </Routes>
            </BrowserRouter>
          ):(<Login/>)
        }
      </div>
    )
  }
}
