import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
import "./Banner.css"
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia,  Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Banner = () => {
    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design valuesPicture">
  <img
      className="d-block w-100 slide"
      src="https://i.ibb.co/zr2pj6F/home1.png"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design valuesPicture">
    <img
      className="d-block w-100 slide"
      src="https://cdn.wallpapersafari.com/56/7/jVYJl5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design valuesPicture">
    <img
      className="d-block w-100  slide"
      src="https://i.ibb.co/L6CBjjc/number1-saree.png"
      alt="Third slide"
    />
    
    <Carousel.Caption>
  
    <Link  to='/more'>
    <button style={{marginTop:"-100px"}} className="banner  text-white">More Products</button>
    </Link>
    
    </Carousel.Caption>
    <Container>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>



      
      <Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dell" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className="dell"  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        {/* <i class="fas fa-map-marker-alt"></i> */}
        <i class="far fa-clock"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        Opening Hours
        This Service any time.
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

{/* 2nd step  */}
<Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dells" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className="dells"  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-map-marker-alt"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        Visit Our Location
        Dhaka Bangladesh
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>


      {/* 3rd step  */}

      <Grid item xs={4} sm={4} md={4}>
<Paper className="keys" sx={{}} elevation={5}>
             <Card className="keys" sx={{ border: 0, boxShadow: 0  }}>
            
             
      <CardContent className="dell"  sx={{}}>
          
        <Box className="mouses">
        <Typography sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-phone-alt"></i>
        </Typography>
        <Typography sx={{fontWeight:700}} color="white" variant="p">
        Contact us now for service
        01774644555
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

</Grid>
</Container>
  </Carousel.Item>
  
</Carousel>
            
        </div>
    );
};

export default Banner;