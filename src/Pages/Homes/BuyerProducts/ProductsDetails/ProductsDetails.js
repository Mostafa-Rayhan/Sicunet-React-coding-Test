import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Paper,
    Rating,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
  
  import { useParams } from "react-router-dom";
  import DateRangeIcon from "@mui/icons-material/DateRange";
  import StarIcon from "@mui/icons-material/Star";
  
  import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
  import PaidIcon from "@mui/icons-material/Paid";
  import {  Form,Col} from "react-bootstrap";
import { useForm } from "react-hook-form";
 
 
  import BorderColorIcon from "@mui/icons-material/BorderColor";
  import PublishIcon from "@mui/icons-material/Publish";
// import { CartContext } from "../../../Context/CartContext";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import { CartContext } from "../../../../contexts/CartContext";
//   import { alert, ButtonStyle } from "../../Hooks/useStyle";
  
 
  
  
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const ProductDetails = () => {
    const [description, setDescription] = useState("");
    const [reviews, setReviews] = useState([]);
    // const { user } = useAuth();
    const [book, setBook] = useState({});
    const [cart, setCart] = useContext(CartContext);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(-1);
    const { id } = useParams();
    const [number, setNumber] = useState(1);
    const [isFetched, setIsFetched] = useState(0);
  
    useEffect(() => {
      fetch(`./data.json`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    }, [id]);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);

        fetch("https://boiling-coast-70144.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                  alert('success')
                    reset();
                }
            });
    };
  
    const handleAddToCart = (book) => {
      const exists = cart.find((pd) => pd._id === book._id);
      let newCart = [];
      if (exists) {
        const rest = cart.filter((pd) => pd._id !== book._id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, book];
      } else {
        book.quantity = 1;
        newCart = [...cart, book];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(() => newCart);
      alert("success", "Success", "Add to Cart Successfully");
    };
    const iconStyle = { display: "flex", alignItems: "center" };
  
    const fetchReviews = () => {
      fetch(`/reviews`)
        .then((res) => res.json())
        .then((data) => {
          const allReviews = data?.data.data
            .filter((review) => review.review_type === "book")
            .filter((review) => review.book === id);
  
          const reviewsChunk = allReviews.slice(0, number * 2);
          setIsFetched(Math.ceil(allReviews.length / 2) === number);
          setReviews(reviewsChunk);
        });
    };
    useEffect(() => {
      fetchReviews();
    }, [number]);
  
   
    return (
      <>
        <Header></Header>
        <Container>
          <Box sx={{ textAlign: "center", my: 5 }}>
            <Typography variant="h4" style={{fontWeight:"600"}}>Product Name : {book?.productName}</Typography>
            <Typography variant="h5" style={{fontWeight:"600"}}> Product Price : {book?.ProductPrice}</Typography>
          </Box>
  
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={10}>
              <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={6} sx={{ mb: 5 }}>

                <div className="photo">
                  <div className="photoShops">
                  <CardMedia
                    sx={{ width: "100%",height:"90%"}}
                    component="img"
                    alt="complex"
                    src={book?.img}
                  />
                  </div>
                </div>
                  
                </Grid>
                <Grid item xs={4} sm={4} md={6}>

                    <Paper
                sx={{
                  p: 2,
              
                  // bgcolor: "#bbdefb",
                }}
              >
                <Box>
                  <span style={iconStyle}>
                    <BorderColorIcon color="primary" />
                    <Typography variant="body1" style={{marginLeft:"10px",fontWeight:"600"}}> ProductName : {book?.productName}</Typography>
                  </span>
                  <br />
                  <span style={iconStyle}>
                    {" "}
                    <PublishIcon color="primary" />
                    <Typography variant="body1" style={{marginLeft:"10px",fontWeight:"600", textAlign:"left"}}>
                      Price {book?.description}
                    </Typography>
                  </span>
                  <br />
                  <span style={iconStyle}>
                    {" "}
                    <DateRangeIcon color="primary" />
                    <Typography variant="body1" style={{marginLeft:"10px",fontWeight:"600", textAlign:"left"}}>
                      categories : {book?.categories}{" "}
                    </Typography>
                  </span>
                  {/* <br /> */}
                  {/* <span style={iconStyle}>
                    {" "}
                    <AppRegistrationIcon color="primary" />
                    <Typography variant="body1" style={{marginLeft:"10px",fontWeight:"600", textAlign:"left"}}>
                      Sizing : {book?.sizing}
                    </Typography>
                  </span> */}

                  {/* <br></br> */}

                  {/* <span style={iconStyle}>
                    {" "}
                    <PublishIcon color="primary" />
                    <Typography variant="body1" style={{marginLeft:"10px",fontWeight:"600", textAlign:"left"}}>
                      Warrenty : {book?.warrenty}
                    </Typography>
                  </span> */}
                  {/* <br /> */}
  
                  <br />
                  <span style={iconStyle}>
                    {" "}
                    <PaidIcon color="primary" />
                    <Typography variant="body1" style={{marginLeft:"10px",fontWeight:"600", textAlign:"left"}}>
                      {" "}
                      Price ৳ {book?.ProductPrice}
                    </Typography>
                  </span>
                  <br />
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      onClick={() => handleAddToCart(book)}
                      size="small"
                    //   sx={ButtonStyle}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </Box>
              </Paper>

                  
                
                </Grid>
              </Grid>
              {/* <hr /> */}
  
              <Box sx={{ my: 5 }}>
              <Form
                                onSubmit={handleSubmit(onSubmit)}
                                // className="shadow-lg px-2 px-md-5 py-3 text-cyan"
                            >
                                {/* <h2 className=" text-center mb-2 abril-font">
                                    Give Us An Honest Review, Please !
                                </h2>
                                <p className="text-cyan text-center mb-5">
                                    Your review helps us to improve our operating system and
                                    provide you better services.
                                </p>
                                 */}
                                {/* <Row className="mb-3"> */}
                                    {/* <Form.Group
                                        className="mb-3 "
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            className="shadow-none"
                                            as="textarea"
                                            rows={3}
                                            placeholder="Write something here..."
                                            {...register("comment", { required: true })}
                                        />
                                    </Form.Group> */}
                                {/* </Row> */}
                                {/* <Row className="mb-3"> */}
                                    <Form.Group as={Col} controlId="formGridRating">
                                        {/* <Form.Label>
                                            Give Us A Rating (1 is the wrost , 5 is the best)
                                        </Form.Label> */}
                                        {/* <select
                                            required
                                            className="form-control shadow-none"
                                            {...register("rating")}
                                        >
                                            <option>Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select> */}
                                    </Form.Group>
                                {/* </Row> */}

                                {/* <div className="text-center">
                                    <Button
                                        type="submit"
                                        className="px-4 py-2 fw-bold btn-light-green shadow-none"
                                    >
                                        <i className="fas fa-clipboard-check text-warning me-2"></i>
                                        Review Us
                                    </Button>
                                </div> */}
                            </Form>
              </Box>
            </Grid>
  
            <Grid item xs={4} sm={8} md={4}>
             
            </Grid>
          </Grid>
        </Container>
  
        <Footer />
      </>
    );
  };
  
  export default ProductDetails;