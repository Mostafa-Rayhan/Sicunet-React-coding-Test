import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
// import { CartContext } from '../Context/CartContext';

const CartCalculation = () => {
    const cartProducts = useContext(CartContext)[0];
   
    let totalQuantity = 0;
    let total = 0;
    for (const product of cartProducts) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.ProductPrice * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shipping = total > 0.10 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandtotal = total + shipping + tax;

    return {
        cartProducts,
        totalQuantity,
        shipping,
        tax,
        total,
        grandtotal
    }
}
export default CartCalculation;