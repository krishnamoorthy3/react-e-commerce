
import { useParams } from "react-router-dom"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({items}) => {
    const { id } = useParams();
    let data = items.filter(item =>
        item.category.toLowerCase().includes(id.toLowerCase()) ||
        item.description.toLowerCase().includes(id.toLowerCase())
    );
    
    return (
        <div>
            <div>{
                    data.map((item,index)=>
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                }</div>
        </div>
    )
}
Product.propTypes={
    items:PropTypes.array
}
export default Product
