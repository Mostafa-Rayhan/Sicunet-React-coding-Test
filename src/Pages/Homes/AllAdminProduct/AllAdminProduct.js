import React, { useContext, useEffect, useState } from 'react';
// import QuestionCart from './QuestionCart';
import { NavLink } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



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

// import { CartContext } from '../../../Context/CartContext';

import ReactPaginate from 'react-paginate';

import { CircularProgress} from '@mui/material';
import Swal from 'sweetalert2';
import { CartContext } from '../../../contexts/CartContext';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import SearchBar from '../Categories/SearchBar';
import Footer from '../../Shared/Footer/Footer';
// import SearchBar from '../../../ShareeCategories/TaterSharee/SearchBar';

const AllAdminProduct = () => {

    const [cart, setCart] = useContext(CartContext);
    const {user}=useAuth();

    const userData = { email: user.email, name: user.displayName };

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
        // alert('Add to Cart Successfully');
        Swal.fire(
          'Success Product!',
          
      )
    };

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
   
    const [categories,setCategories]=useState("");
    const [sizing,setsizing]=useState("");
    const [warrenty,setwarrenty]=useState("");
    const [material,setmaterial]=useState("");
    const [searchValue,setSearchValue]= useState('')
   
  
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    

    const handlePageChange = (data) => {
        setPage(data.selected);
    }
    const fetchData = () => {
        fetch(`http://localhost:5000/adminShowproduct?page=${page}&&categories=${categories}&&sizing=${sizing}&&warrenty=${warrenty}&&material=${material}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setQuestions(data.allQuestions)
            setModel(data.allQuestions)
            const count = data.count;
            const pageNumber = Math.ceil(count / size)
            setPageCount(pageNumber)
        })
      }
      useEffect(() => {
        fetchData()
      }, [categories, page,size,sizing,warrenty,material,size])

      const handleLike = (id) => {
        fetch(`https://sarong-site.onrender.com/adminlike/${id}`, {
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
        fetch(`https://sarong-site.onrender.com/adminunlike/${id}`, {
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
    
  

    useEffect(()=>{
        fetch('http://localhost:5000/adminShowproduct')
        .then(res=>res.json())
        .then(data=>setModel(data.allQuestions))
    },[])
      
    const handleValue = (e) => {
      
        e.preventDefault()
        // const values = e.target.value;
        // console.log(values)
        // console.log(questions)
        const newValue = model?.filter(ques => ques?.productName?.toLocaleLowerCase()?.includes(searchValue))
        
        // console.log(newValue)
        // newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        // console.log(newValue)
        setModel(newValue)
        // console.log(newValue)
       
      
    }

    // const managePost = questions?.filter(models => models?.role === true);
    const managePost = model?.filter(models => models?.categories
        === 'jamdani' || models.role==='admin');
    // console.log(model)
    console.log(managePost)
    

    const  handleSearch=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        // console.log(values)
        setSearchValue(values)
    }
    
 
    const handleSubmit=() =>{
        // handleValue()
       }

       const  handleOnChange=(e)=>{
        e.preventDefault()
        const values = e.target.value;
        const newValue = questions?.filter(ques => ques?.productName?.toLowerCase()?.includes(values.toLowerCase()))
        // console.log(values)
        newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
        setModel(newValue)
    }
  
    const loading =
    <Box sx={{ textAlign: 'center', padding: '100px 0' }}>
        <CircularProgress color="secondary" />
        <Typography>Loading...</Typography>
    </Box>
  
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
      
   
       const placeholder = 'Search by Sharee Product Name';
  

    return (
        
    <div>
        {/* <Header></Header> */}
          <div  style={{background:""}}>
            <Header></Header>
          <div className="container text-black mt-5 mb-5">
            <div className="row ">
               
            <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
               
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">
                        
                        <form
                            onChange={(e) => setCategories(e.target.value)}
                        >

                             
                         {/* {
                          model.map((models)=>( */}
                            {/* <div> */}
                           <div className='brands mt-3'>
                            <h5 className='text-black texts-design main-parts'>Brand</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2" type="checkbox" value="vegetable" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design" for="flexCheckDefault">
                                    Vegetable
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2" type="checkbox" value="food" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-black sharee-design" for="flexCheckDefault">
                                    Food
                                </label>
                            </div>
                            <div className='brands'>
                            {/* <h5 className='text-white texts-designs'>Main Material</h5> */}
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2" type="checkbox" value="fish" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design" for="flexCheckDefault">
                                    fish
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2" type="checkbox" value="Half Silk" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-black sharee-design" for="flexCheckDefault">
                                    Half Silk
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input mt-2" type="checkbox" value="duck" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-3 text-black sharee-design" for="flexCheckDefault">
                                    Duck
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input mt-2" type="checkbox" value="truck" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-3 text-black sharee-design" for="flexCheckDefault">
                                    Truck
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input mt-2" type="checkbox" value="Seed" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design" for="flexCheckDefault">
                                    Seed
                                </label>
                            </div>
                            

                           </div>

                           </div>

                           </form>
                            <hr className='text-white'></hr>

                            {/* <form
                            onChange={(e) => setsizing(e.target.value).toLocaleLowerCase()}>

<div className='brands'>
                            <h5 className='text-white texts-designs'>Size</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2" type="checkbox" value="S" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design" for="flexCheckDefault">
                                    S
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input mt-2" type="checkbox" value="M" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-black sharee-design" for="flexCheckDefault">
                                    M
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input mt-2" type="checkbox" value="L" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design" for="flexCheckDefault">
                                    L
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input mt-2" type="checkbox" value="XL" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design " for="flexCheckDefault">
                                    XL
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input mt-2" type="checkbox" value="XXL" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black sharee-design" for="flexCheckDefault">
                                    XXL
                                </label>
                            </div>
                            

                           </div>
                            </form> */}
                         


                            <hr className='text-white'></hr>
                           
                       
                            <hr className='text-white'></hr>

                            <form
                            onChange={(e) => setmaterial(e.target.value)}>



                            </form>
                           
                            <hr className='text-white'></hr>
                        
                       
                            {/* </div> */}
                       

                       
                        
                    </div>
                </div>
                <div className="col-12 col-md-10">
                    
                      

                          
      <div className="">
         <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
         {model?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={4}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  boxShadow: "0px 14px 22px rgb(42 135 158 / 50%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                  <Grid item xs={12} sm={12} md={12}>
                  <div className='photo'>
                    <div className='photoShops photoalbums'>
                      <img height="230" width="280" style={{borderRadius:"10px"}} src={single?.img}></img>
                   
                    </div>
                   </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                    <h5 style={{fontWeight:"700"}}>Name : {single?.productName}</h5>

                     

                    <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> price : TK.{single?.ProductPrice}</h5>
                        
                      </Typography>
                    
                     
                      <Typography variant="body">
                        <span style={{ fontWeight: 700 }}> Brand : {single?.categories}</span>
                        
                      </Typography>
                      <br />
                      <Rating
                        name="half-rating-read"
                        style={{color:"#D0425C"}}
                        defaultValue={single?.rating}
                        precision={0.5}
                        readOnly
                      />

                     
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: '' }}>
            
                  <NavLink
                    to={`/adminbookDetails/${single._id}`}
                    className="details-show"
                    style={{ textDecoration: "none", marginRight: "4px" }}
                  >
                    <Button
                     className='btn-style download-btn details-show partdetsils ms-4'
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
                            </div>
                    
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

export default AllAdminProduct;