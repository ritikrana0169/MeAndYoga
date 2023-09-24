import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Div>
        <div id='container1'>
            <Link path="/">Logo</Link>
        </div>
        <div id='container2'>
            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Classes</Link>
            <Link to="/">Testimonals</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">9876543210</Link>
        </div>
    </Div>
  )
}

const Div = styled.div`
     display: flex;
     justify-content: space-between;
     width: 85%;
     margin: auto;
     padding: 1rem;
     
     a{
        text-decoration: none;
        /* color: black; */
     }

  #container1 {
   width: 20%;
  }

  #container2 {
    display: flex;
     justify-content: space-between;
     gap: 2rem;
  }


`;



export default Navbar;
