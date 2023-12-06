import React, { useContext, useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import { NavLink } from "react-router-dom";


import './Vegetable.css'
// import useAuth from '../../hooks/useAuth';
import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Pagination,
    Paper,
    Rating,
    Stack,
    Typography,
  } from "@mui/material";

import ReactPaginate from 'react-paginate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CircularProgress} from '@mui/material';
import SearchBar from './SearchBar';

import Swal from 'sweetalert2';
import { CartContext } from '../../../contexts/CartContext';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';


const Vegetable = () => {

    const [cart, setCart] = useContext(CartContext);

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product]

        }
        localStorage.setItem("productCart", JSON.stringify(newCart));
        setCart(() => newCart);
        Swal.fire(
          'Success Product!',
          
      )
    };

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
    const [type, setType] = useState("")
    const [searchValue,setSearchValue]= useState('')
    const [searchQuestion,setSearchQuestion]= useState('')
    const [searchYear,setSearchYear]= useState('')
    // const [searchValue, setSearchValue] = useState([]);
    const [code, setCode] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    // console.log(questions)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }

  
    const {user}=useAuth()
    const userData = { email: user.email, name: user.displayName };
   
    // checkbox er value true or false return kore

    

   

    const fetchData = () => {
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => {
          setQuestions(data.allData)
          setModel(data.allData)
          // setSearchValue(data.TaterSharees)
          console.log(data)

          const count = data.count;
          const pageNumber = Math.ceil(count / size)
          setPageCount(pageNumber)
      })
    }
    useEffect(() => {
      fetchData()
    }, [type, year, code, page])


    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setModel(data.allData))
    },[])


    // like 
    const handleLike = (id) => {
      fetch(`https://sarong-site.onrender.com/like/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => {
        console.log(res)
        if (res.status === 200) {
          fetchData()
          // alert("Liked");
        } else if (res.status === 400) {
          // alert("Already Liked");
        } else {
          // alert("server error");
        }
      }).catch(err => console.log(err));
  
  
    }
    const handleUnLike = (id) => {
      fetch(`http://localhost:5000/unlike/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData)
      }).then(res => {
  
        if (res.status === 200) {
          fetchData()
          // alert("Unlike");
        } else if (res.status === 400) {
          // alert("Already Unlike");
        } else {
          // alert("server error");
        }
      }).catch(err => console.log(err));
  
    }
  
      
  

    // const managePost = questions?.filter(models => models?.role === true);
    const managePost = model?.filter(models => models?.categories
        === 'vegetable' || models.role==='admin');
    console.log(model)
    console.log(managePost)
    

    const  handleOnChange=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        const newValue = questions?.filter(ques => ques?.productName?.toLowerCase()?.includes(values.toLowerCase()))
        // console.log(values)
        newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        setModel(newValue)
    }
    
 
    // alert 
    const alert = (icon, title, text) => {
      Swal.fire({
          position: 'center',
          icon: icon,
          title: title,
          text: text,
          showConfirmButton: false,
          timer: 1500
      })
  }

    const handleSubmit=() =>{
        // handleValue()
       }

       const loading =
    <Box sx={{ textAlign: 'center', padding: '100px 0' }}>
        <CircularProgress color="secondary" />
        <Typography>Loading...</Typography>
    </Box>
const placeholder = 'Search by Product Name, example:vegetable';
    return (
        
    <div>
        {/* <Header></Header> */}
          <div style={{backgroundColor:"black"}}>
            <Header></Header>
          <div className="container text-black mt-5 mb-5">
            <div className="row ">
                {/* <div className="col-md-4">
                   
                </div> */}
                <div className="col">
                    {/* <div className="search-box mb-8"> */}
                        {/* <form onSubmit={handleValue}>
                         
                            <input onBlur={handleSearch} type="text" name='search'
                            style={{fontWeight:"600"}}
                            placeholder='Example : achol  productName ' />
                           
                            <button type='submit'>Search</button>
                        </form> */}
                           <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
                    {/* </div> */}
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12">
                    <div className="question-sidebar">
                        
                        <form
                            onChange={(e) => setType(e.target.value)}
                        >

                             
                            {/* <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="mid" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    Mid
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="final" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    Final
                                </label>
                            </div> */}
                           
                        </form>

                        {/* <div className='mt-3'>
                            <h5>Filter Year</h5>
                            <select onChange={(e) => setYear(e.target.value)} name="year" id="year">
                                <option value="">Select Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div> */}
                        {/* <div className='mt-3'>
                            <h5>Semester</h5>
                            <select onChange={(e) => setCode(e.target.value)} name="code" id="code">
                                <option value="cse">Select Year</option>
                                <option value="cse123">cse123</option>
                                <option value="bba102">bba102</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">2016</option>
                                <option value="7">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div> */}

                    </div>
                </div>
                <div className="">
                    
                      

                          
                            {/* <div className="row"> */}
         <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          
         {

questions.length === 0 ?loading
:
         
         
         managePost?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={3}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  boxShadow: "0px 14px 22px rgb(42 135 158 / 50%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} sm={12} md={12}>

                  <div className='photo'>
                  <div className='photoShops photoalbum'>

                  <img height="230" width="290" style={{borderRadius:"15px"}} src={single?.img}></img>

                  </div>
                  </div>
                 
                    {/* <CardMedia
                      component="img"
                      sx={{ objectFit: "cover", height: 200 }}
                      alt="complex"
                      src={single?.img}
                    /> */}
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                    <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>

                      {/* <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> লেখক: </span>{" "}
                        <span>{single?.author}</span>
                      </Typography> */}
                      {/* <br /> */}

                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                        
                      </Typography>
                      
                      <Typography variant="body">
                        <h6 style={{ fontWeight: 700 }}> Brand :  {single?.categories} </h6>
                       
                      </Typography>
                     
                      <Rating
                        name="half-rating-read"
                        style={{color:"#D0425C"}}
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      />
                      {/* like handler ================== */}
                      <Box style={{display:"flex"}}>
                      <Typography  style={{color:"#D0425C",fontWeight:"700"}}>
                       <ThumbUpIcon className='likedesign' onClick={() => handleLike(single?._id)}></ThumbUpIcon>{single?.likes?.length}
                       </Typography>
                     
                      <Typography> <ThumbDownIcon  className='ms-3 likedesign' onClick={() => handleUnLike(single?._id)}></ThumbDownIcon></Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
               

               {/* button  */}

               <Box sx={{ display: 'flex', justifyContent: '', marginBottom:"" }}>
                  <NavLink
                    to={`/payment`}
                    style={{ textDecoration: "none",textAlign:"left" }}
                  >
                    <Button
                     className='btn-style download-btn '
                     style={{textAlign:"left"}}
                    size="small">
                      Check
                    </Button>
                  </NavLink>
                  <NavLink
                    to={`/Detailshow/${single._id}`}
                    className="details-show"
                    style={{ textDecoration: "none", marginRight: "4px" }}
                  >
                    <Button
                     className='btn-style download-btn details-show downpart'
                     style={{padding:"5px"}}
                    size="small">
                      Details
                    </Button>
                  </NavLink>
                  <Button
                  className='btn-style download-btn'
                    size="small"
                    // sx={ButtonStyle}
                    style={{textAlign:"left"}}
                    onClick={() => handleAddToCart(single)}
                  >
                    Add cart
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
                            {/* </div> */}
                    
                 </div>

                <div className="d-flex mt-5">
                    <div className='mx-auto'>

                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>


            </div >

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
        <Footer></Footer>
      </div>
    </div>
    );
};

export default Vegetable;