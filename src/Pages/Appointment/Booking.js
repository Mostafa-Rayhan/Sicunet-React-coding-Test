import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import BookingModal from '../BookingModal/BookingModal';
import {  Container } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Booking.css'
import BookingModal from './BookingModal';
const Booking = ({booking,date}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {name,time,space ,price,specialist,img,location}=booking

    
    



  
    return (
      
      <>
      

<Grid item xs={12} sm={6} md={4}>
          <Paper className="backgroundDesig" sx={{py:5}} elevation={3}>
          <div className='photo'>
                    <div className='photoShops'>
                      {/* <img height="200" width="280" style={{borderRadius:"10px", marginTop:"-30px"}} src={img}></img> */}
                   
                    </div>
                   </div>
         <Box style={{textAlign:"left",marginLeft:"20px"}}>
         {/* color:'info.main'  */}
         <Typography sx={{ fontWeight:700, marginTop:"5px",fontSize:"18px"}} variant="h6" gutterBottom component="div">
           Name : {name}
        </Typography>
         
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
           Time : {time}
        </Typography>
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
           Price : TK.{price}
        </Typography>
          {/* <Typography variant="caption" sx={{fontWeight:"700"}} gutterBottom component="div">
           {space} SPACES AVAILABLE
        </Typography> */}
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
           location : {location} 
        </Typography>
         

        <Box sx={{ display: 'flex', justifyContent: '' }}>
                  <a
                    // to={`/payment`}
                    style={{ textDecoration: "none",textAlign:"left" }}
                  >
                    {/* <Button
                     className='btn-style download-btn '
                     style={{textAlign:"left"}}
                    size="small">
                      Check
                    </Button> */}
                  </a>
                  <a
                    // to={`/bookDetails/${single._id}`}
                    // to={`/bookDetails/${single._id}`}
                    className="details-show"
                    style={{ textDecoration: "none", marginRight: "4px" }}
                  >
                    <Button
                     className='btn-style download-btn details-show'
                     style={{padding:"8px 8px",textAlign:"left",marginLeft:"-40px"}}
                    size="small">
                      Details
                    </Button>
                  </a>

                  <Button className='btn-style download-btn details-show' onClick={handleOpen} variant="">Appointment</Button>
                 
                </Box>
         </Box>

        
        {/* <Button onClick={handleOpen} variant="contained">Book Appointment</Button> */}
        </Paper>
        </Grid>

        <Box className="">
         <BookingModal
        booking={booking}
        date={date}
        handleClose={handleClose} open={open}></BookingModal>
     
      </Box> 



      

      </>
      
    
   

        
       

       
       

      

       
       
      
    );
};

export default Booking;