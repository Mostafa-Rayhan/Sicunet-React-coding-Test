import React, { useEffect } from 'react';
// import image1 from '../../../../images/developer.jpg'
// import image2 from '../../../../images/mern.png'
// import image3 from '../../../../images/designer.jpg'
import './Bonus.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Bonus = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
    return (
        <div>

          <h1 className='mt-5 text-white'>Offers Products</h1>
            <div className="container mb-5 p-3 mt-5">
                  {/* <h1  className="text-info mb-5 mt-5">Services</h1> */}
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  " style={{border:"2px solid white"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{border:"2px solid white"}} className="image-design" src="https://img.lovepik.com/free-template/bg/20200610/bg/58cf6d89208bf_381925.png_list.jpg!/fw/431" class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card ">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://img.lovepik.com/free-template/bg/20190905/bg/630b9a96496b1.png_list.jpg!/fw/431/clip/0x300a0a0" class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  ">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://img.lovepik.com/free-template/bg/20200611/bg/9951402b4c306_382404.png_list.jpg!/fw/431" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 4rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  ">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://img.lovepik.com/free-template/bg/20200611/bg/9951402b4c306_382404.png_list.jpg!/fw/431" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 5th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  ">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://img.lovepik.com/free-template/bg/20190905/bg/630b9a96496b1.png_list.jpg!/fw/431/clip/0x300a0a0" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 6th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  ">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://img.lovepik.com/free-template/bg/20200610/bg/58cf6d89208bf_381925.png_list.jpg!/fw/431" class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Bonus;