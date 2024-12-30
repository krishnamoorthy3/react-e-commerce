
import { Link,NavLink } from "react-router-dom";
import Logoimg from "/src/assets/logo.png";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { useState,useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({cartitem,wishlist}) => {
    const [searchprod,setSearchprod]=useState("")
    const navigate = useNavigate();
    const searchProduct=(e)=>{
        e.preventDefault()
        searchprod ? navigate(`/Product/${searchprod}`) : alert(`Enter product name`)
        setSearchprod("")
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth); // Update window width on resize
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
        
    return (
        <>
            <header>
                <nav className="navbar-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-3 col-5 navbar-logo">
                                <Link to="/">
                                    <img src={Logoimg} alt="Logo" width="100%" />
                                </Link>
                            </div>
                            {windowWidth>= 768 && <div className="col-lg-6 col-md-4 navbar-search-wrapper text-center">
                                    <form >
                                        <input type="text" value={searchprod} onChange={(e)=>setSearchprod(e.target.value)} className="nav-scr-inp" />
                                        <button className="nav-scr-btn" onClick={searchProduct}><IoSearch/>Search</button>
                                    </form>
                            </div>}
                            <div className="col-lg-4 col-7 col-md-5 navbar-links">
                                <ul className="navbar-links-ul">
                                    <li>
                                        <NavLink to="/" className="nav-link">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Cart" className="nav-link nav-cqpa">Cart 
                                            <span className="nav-cq">{cartitem.length}</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/WishList" className="nav-link nav-cqpa">WishList
                                        <span className="nav-cq">{wishlist.length}</span></NavLink>
                                    </li>
                                </ul>
                            </div>
                            {windowWidth<= 767 && <div className="col-lg-6 col-12 navbar-search-wrapper text-center mt-4">
                                    <form >
                                        <input type="text" value={searchprod} onChange={(e)=>setSearchprod(e.target.value)} className="nav-scr-inp" />
                                        <button className="nav-scr-btn" onClick={searchProduct}><IoSearch/>Search</button>
                                    </form>
                            </div>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
Navbar.propTypes={
    cartitem:PropTypes.array.isRequired,
    wishlist:PropTypes.array.isRequired,
}
export default Navbar;
