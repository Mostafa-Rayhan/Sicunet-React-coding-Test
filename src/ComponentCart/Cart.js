import { Divider, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import CartCalculation from '../Hook/UseCartCallculation';
// import CartCalculation from '../Hooks/UseCartCalculation';



const Cart = (props) => {
    const { shipping, tax, totalQuantity, total, grandtotal, cartProducts } = CartCalculation();
    console.log(cartProducts);

    return (
        <List sx={{ pt: 0 }}>
            <ListItem sx={{ backgroundColor: '#000', color: '#fff' }}>
                <Typography variant='h5'>Order Summary </Typography>
            </ListItem>
            <Divider />

            <ListItem  >
                <Typography>Total Quantity: {totalQuantity} </Typography>

            </ListItem>
            <ListItem  >
                <Typography>Total: {total.toFixed(2)} Taka</Typography>

            </ListItem>
            <ListItem  >
                <Typography>Shipping: {shipping.toFixed(2)} Taka</Typography>

            </ListItem>
            <ListItem  >
                <Typography>Tax: {tax.toFixed(2)} Taka</Typography>

            </ListItem>
            <Divider />
            <ListItem >
                <ListItemIcon>
                    <Typography>Grand Total: {grandtotal.toFixed(2)} Taka</Typography>
                </ListItemIcon>

            </ListItem>
            <ListItem>
                {props.children}
            </ListItem>
        </List>
    );
};

export default Cart;