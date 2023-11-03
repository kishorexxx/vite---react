import React from 'react';
import {Badge,Button, Container, FormControl, Navbar, Nav,Dropdown} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import{FaShoppingCart} from 'react-icons/fa';
import{Link} from 'react-router-dom'
import { CartState } from "../context/Context";
import "./style.css";


const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
   <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>
      <Navbar.Brand>
<Link to="/">Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text className='search'>
        <FormControl 
        style={{width:500}}
        placeholder="search a product"
        className='m-auto'/>
      </Navbar.Text>
      
<Nav>
      <Dropdown alignRight>
  <Dropdown.Toggle variant="success">
 <FaShoppingCart color="white" fontSize="25px"/> 
    <Badge>{cart.length}</Badge>
    </Dropdown.Toggle> 
  
    <Dropdown.Menu style={{ minWidth: 40 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.thumbnail}
                        className="cartItemImg"
                        alt={prod.title}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.title}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "80%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
</Dropdown>
</Nav>
</Container>
   </Navbar>
  )
}

export default Header