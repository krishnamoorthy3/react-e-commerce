
import { Link,NavLink } from "react-router-dom";
import Logoimg from "/src/assets/logo.png";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
const Navbar = () => {
    const [searchprod,setSearchprod]=useState("")
    const navigate = useNavigate();
    const searchProduct=(e)=>{
        e.preventDefault()
        searchprod ? navigate(`/Product/${searchprod}`) : alert(`Enter product name`)
        setSearchprod("")
    }
    return (
        <>
            <header>
                <nav className="navbar-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 navbar-logo">
                                <Link to="/">
                                    <img src={Logoimg} alt="Logo" width="200px" />
                                </Link>
                            </div>
                            <div className="col-lg-6 navbar-search-wrapper text-center">
                                    <form >
                                        <input type="text" value={searchprod} onChange={(e)=>setSearchprod(e.target.value)} className="nav-scr-inp" />
                                        <button className="nav-scr-btn" onClick={searchProduct}><IoSearch/>Search</button>
                                    </form>
                            </div>
                            <div className="col-lg-4 navbar-links">
                                <ul className="navbar-links-ul">
                                    <li>
                                        <NavLink to="/" className="nav-link">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Cart" className="nav-link">Cart</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/WishList" className="nav-link">WishList</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
