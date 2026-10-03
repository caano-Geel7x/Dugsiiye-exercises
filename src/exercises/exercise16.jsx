import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

function ProductItem({ itemId, itemName, price }) {
    const { addToCart } = useContext(CartContext);

    const handleAdd = () => {
        addToCart({ id: itemId, name: itemName, price });
    };

    return (
        <div>
            <p>{itemName}</p>
            <p>price: ${price}</p>
            <button onClick={handleAdd}>Add to cart</button>
        </div>
    );
}

function CartSummary() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const Exercise16 = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const value = { cartItems, addToCart, removeFromCart };

    return (
        <CartContext.Provider value={value}>
            <ProductItem itemId={1} itemName="Widget" price={19.99} />
            <ProductItem itemId={2} itemName="Gadget" price={29.99} />
            <CartSummary />
        </CartContext.Provider>
    );
};

export default Exercise16;