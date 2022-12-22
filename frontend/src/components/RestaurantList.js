import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'

class RestaurantList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list:null
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/restaurant').then((res)=>{
      res.json()
    .then((result)=>{
      console.log(result);
      this.setState({list:result})
    })
  })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
      <h1>Restaurant List</h1>
      {
        this.state.list?
        <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.list.map((item,i)=>
        //   <div>
        //  <span>{item.id}</span> 
        //  <span>{item.name}</span> 
        //  <span>{item.email}</span>
        //  <span>{item.address}</span>
        //  <span>{item.rating}</span>
         
        //   </div>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td>{item.rating}</td>
        <td><Link to={'/update/'+item.id}>Edit</Link></td>

        </tr>
          )
        }
        </tbody>
        </Table>
        </div>:<p>Please Wait</p>
      }
      
        
      </div>
    )
  }
}

export default RestaurantList
