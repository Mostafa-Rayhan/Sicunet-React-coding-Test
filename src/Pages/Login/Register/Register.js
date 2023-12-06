import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'


// import './Register.css'
import './Register.css'
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';



const Register = () => {

    const { registerUser, loginWithGoogle } = useAuth()

    //Location & Navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        if (data.password !== data.password2) {
            alert('Your Password did not match')
            return;
        }

        registerUser(data.email, data.password, data.name,data.client, location, navigate)
    }
    return (
     <div className='signin-background'>
           <div className='py-5'>
        <Container>
            <Row>
              <div className='row'>
                <div className='col-lg-4'>
                    <div className='mt-5'>
                    <img  data-aos="zoom-in" height="380" width="350" src='https://www.programming-hero.com/img/web.svg' alt="" />
                    </div>

                </div>

                <div className='col-lg-8'>

                <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center shadow" style={{background:"#053642",borderRadius:"20px"}}>
                        <h2 className='mb-5  text-white'>Sign Up to E-Krishi-BD</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Enter Full Name' /> <br />
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3'  {...register("email", { required: true })} placeholder='Enter Email' /> <br />
                            <input
                            styele={{fontWeight:"500"}}
                            className='w-75 mb-3' {...register("password", { required: true })} placeholder='6-digit password' type="password" /> <br />
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3' {...register("password2", { required: true })} placeholder='Re-enter Password' type="password" /> <br />
                            <input
                            style={{fontWeight:"500"}}
                            className='w-75 mb-3' {...register("client", { required: true })} placeholder='buyer / user' /> <br />
                            {/* <div >
                                    <select name="client"  className="pending p-2 ">
                                        <option defaultValue="">please Select</option>
                                        <option defaultValue="buyer">Buyer</option>
                                        <option defaultValue="user">User</option>
                                       
                                    </select>
                                </div> */}

                            <button className='submit-all' type='submit'>Sign Up</button>
                        </form>
                        <div className='login-meta mt-4'>
                            <p className='text-white'>Already have an account? <Link to={'/login'}><span className='login-links'style={{color:"#46AADC"}}>Login here</span></Link></p>
                            <span style={{ cursor: "pointer" }} className='fs-4 text-white'>Continue with <FcGoogle onClick={handleGoogleLogin} className='fs-2 google' /></span>
                        </div>
                    </div>
                </Col>

                </div>
              </div>
            </Row>
        </Container>
    </div>
     </div>
    );
};

export default Register;