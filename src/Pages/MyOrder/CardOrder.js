import React from 'react';
import { Button, CardMedia, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
// import { ButtonStyle } from '../../../../Hooks/useStyle';


const CartOrder = ({ cart }) => {

    return (
        <Box>
            {cart?.map((single) => (
                <Box sx={{ pb: 3 }} key={single._id} >
                    <Paper
                        sx={{
                            p: 1,
                            margin: "auto",
                            maxWidth: 500,
                            flexGrow: 1,
                            boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                        }}
                    >
                        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={2} sm={4} md={4}>
                                <CardMedia
                                    component="img"
                                    sx={{ objectFit: "cover", height: 200, width: 200 }}
                                    alt="complex"
                                    src={single?.img}
                                />
                            </Grid>
                            <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                <Box>
                                    <Typography variant="h6"
                                        sx={{ fontSize: '12px', fontWeight: 900 }}
                                    >{single?.productName}</Typography>

                                   

                                    <Typography variant="body">
                                        <span style={{ fontWeight: 700 }}> Price : </span>
                                        {single?.ProductPrice}
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
                </Box>
            ))}
        </Box>
    );
};

export default CartOrder;