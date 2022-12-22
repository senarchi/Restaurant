
import './App.css';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/create'>Restaurant Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/list'>Restaurant List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/search'>Restaurant Search</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/update'>Restaurant Update</Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
     
      <Routes>
      <Route path='/create' element={<RestaurantCreate/>} />
      
      <Route path='/detail' element={<RestaurantDetail/>}/>
     
      <Route path='/list' element={<RestaurantList/>}/>
    
      <Route path='/search' element={<RestaurantSearch/>}/>
     
      <Route path='/update' element={<RestaurantUpdate props={...props} />}/>
     
      <Route exact path='/' element={<Home/>}/>
      </Routes>
      
      </Router>

    </div>
  );
}

export default App;
