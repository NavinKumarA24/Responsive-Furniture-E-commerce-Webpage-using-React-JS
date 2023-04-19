import Logo from './assets/images/logo.png';
import React from 'react'
import {Link, } from "react-router-dom";
import { useSelector } from 'react-redux';
function Header(props) {



const list = useSelector((state)=> state.cart.list)
    return (
        <div className="container-fluid navbar-bg " id="navbar">

            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='/' className="navbar-brand ">
                    < img src={Logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around " id="navbar-menu">
                    <ul className="navbar-nav navbar-menu-ul d-flex gap-4">
                        <li className="nav-item">
                           
                            <Link to='/' className="nav-link ">HOME</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link to='Services' className="nav-link ">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link to='About' className="nav-link ">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link to='Shop' className="nav-link ">SHOP</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link to='Contact' className="nav-link ">CONTACT</Link>
                        </li>
                    </ul>

                    <p className="pt-3 mobno "><i class="bi bi-phone-vibrate-fill"></i> : +01 1234567890</p>

                    <div className="search-icon d-flex gap-3">
                        <Link to="" className="px-2"><i class="bi bi-search"></i></Link>
                        <Link to="/Login" className=" px-2">LOGIN</Link>
                        <div className='cart'>
                        <Link to="/Cart" className="px-2"><i className="bi bi-cart-fill "></i></Link>
                        <span className='cart-count'>{list.length}</span>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}
export default Header;