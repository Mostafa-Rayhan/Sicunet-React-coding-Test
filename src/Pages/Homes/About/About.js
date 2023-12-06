import React from 'react';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import './About.css'
import { Container, Grid, Typography } from "@mui/material";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const Abouts = () => {
    return (
      <div>
        <Header></Header>
        <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#3B4757" }}
            variant="body1"
            gutterBottom
          >
           
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
            variant="h4"
            gutterBottom
            component="div"
          >
          
          </Typography>
          <h2
          style={{textAlign:"left"}}
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >


E-Krish-BD Website. A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
          </h2>


          <br />
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >
           
          </Typography>
        </Grid>
        <Grid
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="3000"
          item xs={12} sm={12} md={6}>
          <img height="370px" width="450px" src="https://cdn.wallpapersafari.com/56/7/jVYJl5.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
        <Footer></Footer>
      </div>
    );
};

export default Abouts;