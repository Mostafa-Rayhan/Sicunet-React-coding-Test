import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth'
// import CartDrawer from '../../Components/CartDrawer'
import './Header.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import useAuth from '../../../Hooks/useAuth';
import CartDrawer from '../../../ComponentCart/CartDrawer';


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

    // const [isSticky, setSticky] = useState(false);
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 50) {
    //             setSticky(true)
    //         } else {
    //             setSticky(false)
    //         }
    //     })
    // }, []);

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red" >
                <Container>
                {/* onClick={handleClick} */}
                {/* <img width='70' height='80' src='https://i.ibb.co/zQf4dd6/E-Krishi-BD-Transparent.png'></img> */}
                    <NavLink  to="/" className='logo'><span>E-Krishi-BD</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                          
                            {/* <Nav style={{color:'white'}}> */}
                            <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        All Catagories
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
        {/* start  */}

        <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu className='drops-menu'>
        <Dropdown.Item className='down-color' href="/vegetables">Vegetables</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/all-categories">ALL Categories</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/food">Food</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/fish">Fish</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/duck">Duck</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>

        {/* end  */}
        <Dropdown.Item className='down-color' href="/cow-feed">Cow Feed</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/truck">Truck</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/fertilizer">Fertilizer</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/seed">Seed</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/medicin">Medicin</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                            {/* </Nav> */}
                            <Nav.Link as={NavLink} to="/allAdminProduct" className='menu-item'>Product</Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className='menu-item'>About</Nav.Link>
                           
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           <CartDrawer/>
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 