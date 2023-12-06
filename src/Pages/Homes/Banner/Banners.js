import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
// import slider1 from '../../../images/bike-11.png'
// import slider2 from '../../../images/bike-12.png'
// import slider3 from '../../../images/bike-13.png'
import "./Banners.css"
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia,  Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typewriter from 'typewriter-effect';
const Banners = () => {
    return (
        <div>

<Carousel className="banners">
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="hero-section">
           
           <div className="container">
               <div className="row pt-2 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                       <Typewriter
                                           options={{
                                               strings: ["Organic Vegetables For Healthy Life"],
                                               autoStart: true,
                                               loop: true,
                                           }}
                                       />
                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
  
  
    <Carousel.Caption className="styles">
      
    {/* <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link> */}
     
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
       <Box className='first-bg'>
       <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
          {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
      
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray",fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
            
           
        </Typography>
       </Box>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

{/* 2nd step  */}
<Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dells" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className=""  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-map-marker-alt"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
         {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
      
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray", fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
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
            
             
      <CardContent className="dellss"  sx={{}}>
          
        <Box className="mouses">
        <Typography sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-phone-alt"></i>
        </Typography>
        <Typography sx={{fontWeight:700}} color="white" variant="p">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
        {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
       
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray", fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

</Grid>
</Container>
  

   
  </Carousel.Item>
  
  {/* 2dn the item  */}
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="hero-section2">
           
           <div className="container">
               <div className="row pt-2 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                       <Typewriter
                                           options={{
                                               strings: ["Organic Vegetables For Healthy Life"],
                                               autoStart: true,
                                               loop: true,
                                           }}
                                       />
                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>

    <Carousel.Caption>
 
    {/* <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link> */}
     
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
       <Box className='first-bg'>
       <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
          {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
      
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray",fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
            
           
        </Typography>
       </Box>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

{/* 2nd step  */}
<Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dells" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className=""  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-map-marker-alt"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
         {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
      
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray", fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
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
            
             
      <CardContent className="dellss"  sx={{}}>
          
        <Box className="mouses">
        <Typography sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-phone-alt"></i>
        </Typography>
        <Typography sx={{fontWeight:700}} color="white" variant="p">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
        {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
       
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray", fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

</Grid>
</Container>
  </Carousel.Item>
  <Carousel.Item className="carousel-design valuesPicture">
  <section className="hero-section3">
           
           <div className="container">
               <div className="row pt-2 pb-5">
                   <div className="d-flex justify-content-center align-items-center ">
                       <div>
                           <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                               <div className=" text-center my-5 py-5 ">
                                   <h1 className="text-white fw-bold  display-2">
                                       <Typewriter
                                           options={{
                                               strings: ["Organic Vegetables For Healthy Life"],
                                               autoStart: true,
                                               loop: true,
                                           }}
                                       />
                                   </h1>
                               </div>

                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </section>
    
    <Carousel.Caption>
  
    {/* <Link  to='/more'>
    <button style={{marginTop:"-100px"}} className="banner  text-white">More Products</button>
    </Link> */}
    
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
       <Box className='first-bg'>
       <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
          {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
      
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray",fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
            
           
        </Typography>
       </Box>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

{/* 2nd step  */}
<Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dells" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className=""  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-map-marker-alt"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
         {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
      
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray", fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
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
            
             
      <CardContent className="dellss"  sx={{}}>
          
        <Box className="mouses">
        <Typography sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-phone-alt"></i>
        </Typography>
        <Typography sx={{fontWeight:700}} color="white" variant="p">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
       <Grid item xs={4} sm={4} md={6}>
        {/* <img height="100" width="170" style={{padding:"0"}} src='https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?k=20&m=1288664808&s=170667a&w=0&h=UUOEXe8KqNoc-vIb-no5EcnlPn_CzQ5mZ0ptGnsfNHU='></img> */}
       
       </Grid>
       <Grid item xs={4} sm={4} md={6}>
       <h5 style={{color:"gray", fontWeight:"700"}}>organis foods the vegetables</h5>
       </Grid>
       </Grid>
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

export default Banners;