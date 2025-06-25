
// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, quantity) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity }];
//     });
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) {
//       setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     } else {
//       setCartItems((prevItems) =>
//         prevItems.map((item) =>
//           item.id === id ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     }
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cartItems from localStorage or an empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Save cartItems to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('CartContext: Saved cart to localStorage', cartItems);
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      const newItem = { ...product, quantity };
      console.log('CartContext: Adding to cart', newItem);
      return [...prevItems, newItem];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      setCartItems((prevItems) => {
        const updatedItems = prevItems.filter((item) => item.id !== id);
        console.log('CartContext: Removed item', { id, updatedItems });
        return updatedItems;
      });
    } else {
      setCartItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
        console.log('CartContext: Updated quantity', { id, newQuantity, updatedItems });
        return updatedItems;
      });
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      console.log('CartContext: Removed from cart', { id, updatedItems });
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);