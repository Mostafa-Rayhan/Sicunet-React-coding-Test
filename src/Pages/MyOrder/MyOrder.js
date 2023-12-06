import React, { useEffect, useState } from 'react';
import { Box, Chip, Container, Divider, Fab, Grid, TableFooter, TablePagination, Toolbar } from '@mui/material';
// import CartOrder from './MyBooking';
// import CustomerAddress from './Address'
import axios from 'axios';


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
// import CustomerAddress from './Address';
// import CartOrder from './MyBooking';
import CustomerAddress from './CustomerAddress';
import CartOrder from './CardOrder';
// import useAuth from '../../../../Hooks/useAuth';

const MyOrder = () => {
    const [ordering, setOrder] = useState([]);
    const { user } = useAuth();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[user?.email])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/manageAllOrderDelete/${id}`)
                    .then((response) => {
                        response.status === 204 &&
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        const deleted = ordering.filter((d) => d._id !== id);
                        setOrder(deleted)
                    }).catch((err) => {
                        console.log(err);
                    })
            }
        })
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const color = ordering.length === 0 ? "error" : "success"
    return (
        <Container>
            <Toolbar />
            <Divider>
                <Fab variant="extended" size="small" color={color} aria-label="add">
                    <AddShoppingCartIcon />{ordering.length === 0 ? "My Order Not Found" : "MY Order"}
                </Fab>
            </Divider>
           

          <Box>

           


          {
                ordering?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map(order =>
                    <Box key={order?._id}>

                        <Grid
                            container
                            spacing={2}
                            sx={{ mt: 6 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >

                            <Grid item xs={4} sm={8} md={7}>

                                <CustomerAddress
                                    order={order}
                                    handleDelete={handleDelete}
                                />

                            </Grid>

                            <Grid sx={{ py: 3 }} item xs={4} sm={8} md={5}>

                                <CartOrder
                                    cart={order.cartProducts}

                                />
                            </Grid>

                        </Grid>

                        <Divider >
                            <Chip label={<AddShoppingCartIcon />} />

                        </Divider>
                    </Box>
                )
            }



         
          </Box>
{/* cartProducts */}
            <TableFooter>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 40]}
                    component="div"
                    count={ordering.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableFooter>
        </Container>
    );
};

export default MyOrder;