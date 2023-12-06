import React, { useRef, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import connectImg from './images/contact.svg'
// import img1 from '../../Assets/Images/location-removebg-preview (1).png'
// import img2 from '../../Assets/Images/email-removebg-preview (1).png'

// import img3 from '../../Assets/Images/mobilee-removebg-preview (1).png'
// import img4 from '../../Assets/Images/clock (1).png'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
// import Footer from '../Shared/Footer/Footer';
// import NavigationBar from '../Shared/NavigationBar/NavigationBar';
// import { alert, ButtonStyle } from '../../Hooks/useStyle';
// import SharedBanner from '../Shared/SharedBanner/SharedBanner';





const Contact = () => {

  const {
    register,
    handleSubmit,
    reset} = useForm();
 

  const sendEmail = (formData) => {
    emailjs.send("service_es28khp", "template_1fmwbhh", formData, "user_bJFVwTvtJQe23vqEilEMy")

 .then(
  (result) => {

    result.text && alert('success', 'Success', 'Message sent successfully');
  },
  (error) => {

    error.text &&  alert('error', 'Error', 'Messege can not send');
  }
);
reset();  
  };

  return (

    <>
    <Header></Header>
      {/* <NavigationBar /> */}
      {/* <SharedBanner pageName={"Contact Us"} /> */}
      <Container className='contacts' id='contacts'>



        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{mt:3}}>
          <Grid item xs={4} sm={4} md={5} lg={5}>
            <Box style={{marginTop:"80px"}}>
              <img style={{ width: "370px" }} src={connectImg} alt="" />
            </Box>
          </Grid>

          <Grid item xs={4} sm={4} md={7} lg={7}>
            <Box sx={{ mb: 5 }}>
              <Box style={{marginTop:"80px"}}>
                <Typography sx={{ mb: 2 }} variant='h4'>Get in Touch</Typography>
                <Typography sx={{ mb: 4 }} variant='body'>You can find out any information about e-commerce in this website.If you have any question or confusion! Don't be shy. Feel free to connect with us. We are waitting for your response.</Typography>

              </Box>


              <form  onSubmit={handleSubmit(sendEmail)}>

                <Box sx={{ mt: 3 }} >

                  <TextField id="filled-basic" label="Name" fullWidth
                    variant="filled"{...register("name", { required: true })}
                    placeholder=" Your Name"
                    sx={{ my: 2 }} />
                  <TextField id="filled-basic" label="Email" fullWidth
                    variant="filled"{...register("email", { required: true })}
                    placeholder=" Your email"
                    sx={{ my: 2 }} />

                  <TextField id="filled-basic" label="Phone Number"
                    variant="filled" fullWidth {...register("number", { required: true })}
                    placeholder="Number"
                    sx={{ my: 2 }} />



                  <TextField fullWidth
                    id="outlined-multiline-static"
                    variant="filled"
                    label="Massage"
                    multiline
                    rows={4}

                    {...register("message", { required: true })} placeholder=" Your Massage"
                    sx={{ my: 2 }} /> <br />


                  <Button type="submit" fullWidth variant="contained"  endIcon={<SendIcon />}> Send</Button>


                </Box>


              </form>

            </Box>
          </Grid>
        </Grid>

        <Box sx={{ my: 5 }}>
          <Grid container spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
            <Grid item xs={2} sm={4} md={3} lg={3}>
              <Box>
                <Box sx={{ ml: 5 }}>
                  <img src="https://i.ibb.co/RjMJ1NV/location-removebg-preview-1.png" alt="" />
                </Box>
                <Box>
                  <Typography sx={{ ml: 4 }} variant='h5'>Location</Typography>
                  <Typography variant='body'>Dhaka, Bangladesh</Typography><br />
                  <Typography variant='body'>Tangail, Bangladesh</Typography>
                </Box>
              </Box>

            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3}>
              <Box>
                <Box sx={{ ml: 5 }}>
                  <img src="https://i.ibb.co/kgC58zp/email-removebg-preview-1.png" alt="" />
                </Box>
                <Box>
                  <Typography sx={{ ml: 5 }} variant='h5'>Mail Us</Typography>
                  <Typography variant='body'>rayhan57.dev@gmail.com</Typography><br />
                  <Typography variant='body'>mostafarayhan57@gmail.com</Typography>

                </Box>

              </Box>

            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3}>
              <Box>
                <Box sx={{ ml: 4 }}>
                  <img src="https://i.ibb.co/J2DjHCn/mobilee-removebg-preview-1.png" alt="" />
                </Box>
                <Box>
                  <Typography sx={{ ml: 4 }} variant='h5'>Call Us</Typography>
                  <Typography variant='body'>+8801786159869</Typography><br />
                  <Typography variant='body'>+8801886159869</Typography>
                </Box>


              </Box>

            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3}>
              <Box>
                <Box sx={{ ml: 5 }}>
                  <img src='https://i.ibb.co/YRmJtDr/clock-1.png' alt="" />
                </Box>
                <Box>
                  <Typography sx={{ ml: 2 }} variant='h5'>Opening Hours</Typography>
                  <Typography variant='body'>Mon - Fri : 10am to 2pm</Typography><br />
                  <Typography variant='body'>Sat - Sun : Closed</Typography>
                </Box>


              </Box>

            </Grid>
          </Grid>
        </Box>

      </Container>
      <Footer></Footer>
      {/* <Footer /> */}
    </>






  );
}
  ;

export default Contact;