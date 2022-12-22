import React, { Component } from 'react'

class RestaurantCreate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:null,
       address:null,
       rating:null,
       email:null
    }
  }

  create(){
    console.log(this.state);
    fetch('http://localhost:3000/restaurant',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.state)
    }).then((res)=>{
      res.json().then((val)=>{
        console.log('ADDED')
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <div>
        <input onChange={(e)=>{this.setState({name:e.target.value})}} placeholder='Restaurant Name'/><br/><br/>
        <input onChange={(e)=>{this.setState({address:e.target.value})}} placeholder='Address'/><br/><br/>
        <input onChange={(e)=>{this.setState({rating:e.target.value})}} placeholder='Rating'/><br/><br/>
        <input onChange={(e)=>{this.setState({email:e.target.value})}} placeholder='Email ID'/><br/><br/>
        <button onClick={()=>{this.create()}}>Add Details</button>

        </div>
      </div>
    )
  }
}

export default RestaurantCreate
