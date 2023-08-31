import React, { Component } from 'react'
import {db} from './fire'
import firebase from 'firebase/compat'

export default class Add extends Component {
    state={
        usermsg:""
    }
    handleChange=(e)=>{
        this.setState({
            usermsg:e.target.value
        })
    }
    handleClick=()=>{
        let currentDate=firebase.firestore.Timestamp.now()
        const response=db.collection("store").add({
            message:this.state.usermsg,
            date:currentDate
        })
        //console.log(response)
        this.setState({
            usermsg:""
        })
    }
  render() {
    return (
      <div>
        <p>
            <input 
                value={this.state.usermsg}
                onChange={this.handleChange} 
                placeholder='Enter a message'/>
            <button onClick={this.handleClick}>Send</button>
        </p>
      </div>
    )
  }
}
