import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

// import Booking from '../Booking/Booking';
import ReactPaginate from 'react-paginate';
// import './AvailableAppointment.css'
// import SearchBar from '../../Home/MedicinProduct/SearchBar';
import Booking from '../Booking';
import SearchBar from '../../Homes/Categories/SearchBar';
const bookAppointment=[
    {
    id:1,
    name:'Cow Doctor',
    time:'08.00 AM - 09.00 AM',
    space:10,
    price:50,
    location:'Dhaka'
},
    {
    id:2,
    name:'Food Doctor',
    time:'09.00 AM - 10.00 AM',
    space:8,
    price:80,
    location:'Dhaka'
},
    {
    id:3,
    name:'Cow Doctor',
    time:'10.00 AM - 11.00 AM',
    space:9,
    price:120,
    location:'Dhaka'
},
    {
    id:4,
    name:'Cow Doctor',
    time:'11.00 AM - 12.00 AM',
    space:5,
    price:100,
    location:'Dhaka'
},
    {
    id:5,
    name:'Cow Doctor',
    time:'06.00 PM - 07.00 PM',
    space:10,
    price:150,
    location:'Dhaka'
},
    {
    id:6,
    name:'Cow Doctor',
    time:'07.00 PM - 08.00 PM',
    space:10,
    price:200,
    location:'Dhaka'
}
]
const AvailableAppointment = ({date}) => {

    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState([]);
   
    const [specialist,setSpecialist]=useState("");
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
        fetch(`https://doctor-backends.up.railway.app/getDoctors?page=${page}&&sizing=${sizing}&&size=${size}&&specialist=${specialist}`)
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
      }, [specialist, page,size,sizing,warrenty,material,size])

      useEffect(()=>{
        fetch('https://doctor-backends.up.railway.app/getDoctors')
        .then(res=>res.json())
        .then(data=>setModel(data.allQuestions))
    },[])

      const handleValue = (e) => {
      
        e.preventDefault()
        const newValue = model?.filter(ques => ques?.division?.toLocaleLowerCase()?.includes(searchValue))
        
        
        setModel(newValue)
       
 }

 const  handleSearch=(e)=>{
    e.preventDefault()
    const values = e.target.value;
    // console.log(values)
    setSearchValue(values)
}

const  handleOnChange=(e)=>{
    e.preventDefault()
    const values = e.target.value;
    const newValue = questions?.filter(ques => ques?.DoctorName?.toLowerCase()?.includes(values.toLowerCase()))
    // console.log(values)
    newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
    setModel(newValue)
}

const placeholder = 'Search by  Name';
    return (
        <div>
            <Typography variant="h4" sx={{color:'info.main', fontWeight:500, m:3}}>Available Appointments {date.toDateString()}</Typography>

            <Container>

                {/* start  */}

                <div className="container text-black mt-5 mb-5">
                <div className="row ">
                <div className="col-md-4">
                   
                </div>
                <div className="">
                    <div className=" mb-8">
                    <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />
                    </div>
                </div>
            </div>


      {/* start  */}


      <div className="row g-4" >
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">
                        
                       {/* from input data add to check bar  */}
                       {/* from input data add to check bar  */}






                            <hr className='text-white'></hr>

                            {/* <form
                            onChange={(e) => setsizing(e.target.value).toLocaleLowerCase()}>

<div className='brands'>
                            <h5 style={{fontWeight:"700"}} className='text-black texts-designs'>Size</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="S" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    S
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="M" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-black" for="flexCheckDefault">
                                    M
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="L" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    L
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="XL" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    XL
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="XXL" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    XXL
                                </label>
                            </div>
                            

                           </div>
                            </form> */}
                         


                            <hr className='text-white'></hr>
                            {/* <form
                            onChange={(e) => setwarrenty(e.target.value)}>

<div className='brands'>
                            <h5 style={{fontWeight:"700"}} className='text-black texts-designs'>Warrenty</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="7 Days" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    7 Days
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="1 month" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-black" for="flexCheckDefault">
                                    1 Month
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="6 month" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-3 text-black" for="flexCheckDefault">
                                    6 Month
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="9 month" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-3 text-black" for="flexCheckDefault">
                                    9 Month
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="1 Year" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    1 Year
                                </label>
                            </div>
                            

                           </div>

                            </form> */}
                       
                            <hr className='text-white'></hr>

                            {/* <form
                            onChange={(e) => setmaterial(e.target.value)}>

<div className='brands'>
                            <h5 className='text-white texts-designs'>Main Material</h5>
                           <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="silk" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    Silk
                                </label>
                            </div>
                            <div className="form-check align-items-center me-3">
                                <input className="form-check-input" type="checkbox" value="Half Silk" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-4 text-black" for="flexCheckDefault">
                                    Half Silk
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="Cotton" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-3 text-black" for="flexCheckDefault">
                                    Cotton
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="Katan" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-3 text-black" for="flexCheckDefault">
                                    Katan
                                </label>
                            </div>
                            <div className="form-check align-items-center me-5">
                                <input className="form-check-input" type="checkbox" value="Tissure" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold all me-5 text-black" for="flexCheckDefault">
                                    Tissure
                                </label>
                            </div>
                            

                           </div>

                            </form> */}
                           
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
        {
             bookAppointment.map(booking=> <Booking
             key={booking.id}
             booking={booking}
             date={date}>

             </Booking>)
         }
        </Grid>
                            </div>
                    
                 </div>

                


            </div >





      {/* end  */}


      </div>


                {/* end  */}
            <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}> */}
      <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >

{/* {
             model.map(booking=> <Booking
             key={booking.id}
             booking={booking}
             date={date}>

             </Booking>)
         } */}


        </Grid>
        
      {/* </Grid> */}
    </Box>
            </Container>

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
        </div>
    );
};

export default AvailableAppointment;