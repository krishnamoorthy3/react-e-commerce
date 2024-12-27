
const ProductIncDec = () => {
    return (
        <>

            <div className="cart-incdec-wrapper mt-4">
                <button className="cart-incdec-btn">-</button>
                <input type="number" className="cartinc-inp" max="10" min="1" />
                <button className="cart-incdec-btn">+</button>
            </div>
        </>
    )
}

export default ProductIncDec
