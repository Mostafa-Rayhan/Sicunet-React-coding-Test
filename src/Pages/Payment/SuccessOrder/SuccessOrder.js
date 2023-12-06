import React, { useEffect, useState } from 'react';
import { Button, CardMedia, Container, Grid, Paper, Rating, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
// import { ButtonStyle } from '../../../Hooks/useStyle';
// import Footer from '../../Shared/Footer/Footer';
// import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import './SuccessOrder.css'
// import Logo from './Img/logo.png'
// import { api } from '../../../Hooks/Api';

// import Confetti from 'react-confetti';


const SuccessOrder = () => {

    const [book, setBook] = useState({});
    const [books, setBooks] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data);
                setBooks(data?.cartProducts);

            })
    }, [id])

    const navigate = useNavigate();
    const handlerGotoHome = () => navigate('/');
    const handlerGoToMyOrder = () => navigate('/dashboard/myOrder');

    let width = window.innerWidth;
    let height = window.innerHeight;
    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* <NavigationBar /> */}

            <Box className='paymentSuccessContainer'>

                <Container width={width}
                    height={height}>
                    {/* <Confetti /> */}
                    <Grid
                        container
                        sx={{ mt: 2 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        style={{ textAlign: "center" }}
                    >
                        <Grid item xs={4} sm={4} md={6} >

                            <Box className='congratulation-card'>
                                <Box>
                                    <Toolbar />
                                    {/* <img style={{ width: '70%' }} src={Logo} alt="" /> */}
                                    <Typography variant="h6"><span style={{ fontSize: '30px', color: 'orange' }}>
                                        Congratulations
                                    </span> <br /> Payment Success Fully</Typography>
                                    <Typography variant='h5'>
                                        {book?.cus_name}
                                    </Typography>
                                    <Typography variant='body'>
                                        Email:   {book?.cus_email}
                                    </Typography>
                                    <Typography variant='h5'>
                                        Total Amount:

                                        <span style={{ color: 'red', paddingLeft: '2px' }}>
                                            ({book?.total_amount})
                                        </span>

                                    </Typography>
                                    <br />
                                    <Button
                                        onClick={handlerGotoHome}
                                        size="small" sx={{ mr: 2 }}>
                                        Go to Home
                                    </Button>

                                    <Button onClick={handlerGoToMyOrder} size="small" >
                                        My Order
                                    </Button>


                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Grid
                                container
                                spacing={2}
                                sx={{ mt: 6 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                {books?.map((single) => (
                                    <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={8} md={12}>
                                        <Paper
                                            sx={{
                                                p: 1,
                                                margin: "auto",
                                                maxWidth: 500,
                                                flexGrow: 1,
                                                boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                                            }}
                                        >
                                            <Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
                                                <Grid item xs={7} sm={2} md={6}>
                                                    <CardMedia
                                                        component="img"
                                                        sx={{ objectFit: "cover", height: 200, width: 200 }}
                                                        alt="complex"
                                                        src={single?.img}
                                                    // style={{marginLeft:"5px"}}
                                                    />
                                                </Grid>
                                                <Grid item xs={5} sm={6} md={6} pl={2} my={3}
                                                    style={{ textAlign: "left", marginRight: "" }}>
                                                    <Box>
                                                        <Typography variant="h2"
                                                            sx={{ fontSize: '18px', fontWeight: 700 }}
                                                        >{single?.productName}</Typography>


                                                        <Typography variant="body">
                                                            <span style={{ fontWeight: 700 }}> Price :</span>
                                                            {single?.ProductPrice} Taka
                                                        </Typography>
                                                        <br />
                                                        <Typography variant="body">
                                                            <span style={{ fontWeight: 700 }}> Quantity:</span>
                                                            {single?.quantity}
                                                        </Typography>
                                                        <br />
                                                        <Rating
                                                            name="half-rating-read"
                                                            defaultValue={single?.rating}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </Box>

                                                    <NavLink
                                                        to={`/bookDetails/${single._id}`}
                                                        style={{ textDecoration: "none", marginRight: "5px" }}
                                                    >
                                                        <Button size="small" >
                                                            Details
                                                        </Button>
                                                    </NavLink>

                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>


                </Container>
                <Toolbar />
            </Box>

            {/* <Footer /> */}
        </Box>
    );
};

export default SuccessOrder;