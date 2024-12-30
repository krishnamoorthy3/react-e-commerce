import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

const Wishlistbtn = ({handelWishlist,id,category,wishlistbtncolor}) => {
    return (
        <>
            <div className="wish-wrapper">
                <button className="wish-btn" onClick={()=>handelWishlist(id,category)}><FaHeart className={wishlistbtncolor(id)!=-1?"color-red":""}/></button>
            </div>
        </>
    )
}
Wishlistbtn.propTypes={
    handelWishlist:PropTypes.func,
        id:PropTypes.number,
        category:PropTypes.string,
        wishlistbtncolor:PropTypes.func,
        wishlistb:PropTypes.bool,
}

export default Wishlistbtn
