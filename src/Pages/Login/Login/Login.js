
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';




const Login = () => {

    const { loginWithGoogle, loginWithOwnEmailAndPass } = useAuth()

    //Location & navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login here
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data.email)
        loginWithOwnEmailAndPass(data.email, data.password, location, navigate)
    }
    return (
      <div className='login-background'>
          <div className='py-5'>
            {/* <Header></Header> */}
            <Container>
                <Row>
                <div className='row'>
                    <div className='col-lg-4'>
                     <div className='mt-5'>
                     <img  data-aos="zoom-in" height="330" width="350" src='https://www.programming-hero.com/img/web.svg' alt="" />
                     </div>
                    </div>
                    <div className='col-lg-8'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#053642",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Login to E-Krishi-BD</h2>
                            {/* onSubmit={handleSubmit(onSubmit)} */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                style={{fontWeight:"500"}}
                                    className='w-75 mb-3'
                                    {...register("email", { required: true })}
                                    placeholder='Enter Email' />
                                <br />

                                <input
                                style={{fontWeight:"500"}}
                                    className='w-75 mb-3'
                                    {...register("password", { required: true })} placeholder='Enter Password' type="password" />
                                <br />

                                <button className='submit-all' type='submit'>Login</button>
                            </form>
                            <div className='login-meta mt-4'>
                                <p className='text-white'>New to Education <Link to={'/register'}><span className='login-links' style={{color:"#46AADC"}}>Create a free Account</span></Link></p>
                                <span onClick={handleGoogleLogin} style={{ cursor: "pointer" }} 
                                // onClick={handleGoogleLogin}
                                 className='fs-4 text-white'>Continue with <FcGoogle  className='fs-2 google' /></span>
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

export default Login;