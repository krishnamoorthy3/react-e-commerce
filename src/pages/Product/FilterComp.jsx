
import PropTypes from "prop-types";
import { FaSortAmountUp,FaSortAmountDownAlt  } from "react-icons/fa";
const FilterComp = ({setProduct,product}) => {
    const handelhightolow=()=>{
        setProduct(()=>[...product].sort((a,b)=>b.price-a.price));
    }
    const handellowtoHign=()=>{
        setProduct(()=>[...product].sort((a,b)=>a.price-b.price));
    }
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <button onClick={handelhightolow} className="sort-btn"><FaSortAmountUp/>Sort Price High to Low</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick={handellowtoHign} className="sort-btn"><FaSortAmountDownAlt />Sort Price Low to High</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
FilterComp.propTypes={
    setProduct:PropTypes.func,
    product:PropTypes.array
}
export default FilterComp
