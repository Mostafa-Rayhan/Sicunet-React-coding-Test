// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Avatar, Box, Container, Rating, Typography, Paper } from "@mui/material";
// import "./TestimonialSlider.css";
import './Categories.css'

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";
import { Link } from "react-router-dom";
// import useAuth from "../../ManyPages/hooks/useAuth";

const Categories = () => {
//  const {user}=useAuth()
//   const [review,setReview]=useState([])
//   useEffect(()=>{
//     fetch('https://sarong-site.onrender.com/review')
//     .then(res=>res.json())
//     .then(data=>setReview(data))
//   },[])
  return (
    <div data-aos="fade-up" className="container style-cate ">
         <h1 style={{fontSize:"3em" , color: "white", fontWeight:"700"}} className="categories-style">Categories</h1>
         <hr className='' style={{  width: '10%', height: '5px', backgroundColor: 'white', display:"inline-block", border:0}} />
     <div className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={6}
         spaceBetween={30}
         freeMode={true}
         // pagination={{
         //   clickable: true,
         // }}
         autoplay={{
           delay: 2000
         }}
        
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >


         <>
        
        
             <div>

              

                <Swiper>


                <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/vegetable">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://media.istockphoto.com/id/1352758440/photo/paper-shopping-food-bag-with-grocery-and-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=iKgsDK_4spbF8uECRQcmeebr1RSh2SnHDPM3FS2aaco='
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Vegetable </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>



   {/* 2nd  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/food">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Food </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 3rd  */}


   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/fish">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Fish_in_Nepal.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Fish </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 4th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/fish">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://image.made-in-china.com/155f0j00SGwYZMbyQmcp/Df-12L-15L-Power-Tiller-Walking-Tractor.jpg'
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Truck </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 5th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
<Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/food">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://media.istockphoto.com/id/1201461261/photo/tractor-spraying-pesticides-on-soy-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=WHXte5Pj4QYxTn66JTc_4sHbRE1bedi4XhYpHY9ZWC4='
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> Medicin </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>


   {/* 6th  */}

   <SwiperSlide style={{width:"200px",  background:"",padding:"12px",borderRadius:"12px"}}>  
                <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 30%)"
                }}
              >


<div style={{ }}>
              
 
<Box sx={{ display: "flex", justifyContent: "center" }}>
               <Link style={{textDecoration:"none"}} to="/vegetable">

               <img height='90' style={{borderRadius:"50%"}}
                  src='https://media.istockphoto.com/id/958400392/photo/close-up-of-senior-farmer-with-soybean-seed-in-his-hands.jpg?s=612x612&w=0&k=20&c=eCf5CuxaMVRyucRy6TrKqVbwLL1pcaCXAEAy2wgsKBU='
                   sx={{
                    //  width: 30,
                     borderRadius:"100%",
                     height: 10,
                     padding:"2px",
                     border: "1px solid lightgray",
                    //  marginBottom:"10px",
                     
                    //  marginTop:"10px"
                   }}
                 />

<Box style={{padding:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h4 style={{fontSize:"18px",textAlign:"center",fontWeight:"700",textDecoration:"none",color:"#032831"}}> seed </h4>
           </Box>
 </Link>
      </Box>
            </div>
             </Paper>
   </SwiperSlide>



             
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}

                </Swiper>
             {/* <h1>{reviews._id}</h1> */}
           
             </div>
          
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>
  );
};

export default Categories;