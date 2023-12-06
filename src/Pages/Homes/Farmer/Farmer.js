import React from 'react';
import './Farmer.css'
const Farmer = () => {
    return (
        <div>
            <div className="container mb-5 p-3">
                  <h1  className=" mb-5 mt-5 organic">We are Professional Organic Farmer</h1>
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Farmer Name</h2>
              <h6 className="tittle">Jamaal Hasan</h6>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src='https://c8.alamy.com/comp/2FYN6TD/young-woman-professional-farmer-holding-box-full-of-organic-cabbage-in-a-farm-field-2FYN6TD.jpg' class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Virat Hasan</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src='https://media.istockphoto.com/photos/man-holding-crate-ob-fresh-vegetables-picture-id870915532?k=20&m=870915532&s=170667a&w=0&h=HmhXa-6Ks2UoXgf7ksYrXCuvJlZW0yDYM3FtRONaDhA=' class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
              <h2 className="tittle">Mikel Hossion</h2>
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src='https://i.ytimg.com/vi/amnvU8dPbQU/maxresdefault.jpg' class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Farmer;