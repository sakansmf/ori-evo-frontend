import "./Login.css";
import axios from "axios";
import loginImg from '../../images/Metaverse1.png';
import logo1 from '../../images/EVONESIA putih no bg 3.png';
import logo2 from '../../images/EVONESIA putih fix 5.png';
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
<script src="https://apis.google.com/js/platform.js" async defer></script>



const Login = () => {

    //fungsi untuk login ya mazzzehh
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //go validasi register yo
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(
        () => {
            if (localStorage.getItem('token')) {
                navigate('/Home');
            } // eslint-disable-next-line
        }, []
    );

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await axios.post('http://127.0.0.1:8000/api/auth/login', formData)
            .then((response) => {
                console.log(response.data.access_token);
                localStorage.setItem('token', response.data.access_token);
                navigate('/home');

            }).catch((error) => {
                console.log(error.response.data);
                setValidation(error.response.data);
            })
    }

    return (
        <>
            <div className="main-login">
                <img className='logo2' src={logo2} alt="" />
                <img className='vector' src={loginImg} alt="" />
                <img className='logo1' src={logo1} alt="" />

                <div className="contain">
                    {
                        validation.error && (
                            <div className="alert alert-danger" role="alert">
                                {validation.error}
                            </div>
                        )
                    }
                    <form onSubmit={loginHandler} className="form-log">
                        <div className="input-div">
                            <div className="div">
                                <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
                                {
                                    validation.email && (
                                        <small className="text-danger">
                                            {validation.email[0]}
                                        </small>
                                    )}
                            </div></div>


                        <div className="input-div">
                            <div className="div">

                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                                {
                                    validation.password && (
                                        <small className="text-danger">
                                            {validation.password[0]}
                                        </small>
                                    )}
                            </div></div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                    </form>

                    <div className="icon3">
                        <div className="iconig"></div>
                        <div className="iconlink"></div>
                        <div className="icongit"></div>
                    </div>
                    <div className="under-form-log">
                        <div className="router">Don't have an account ? <Link to='/Register'>Register</Link></div>
                        <p >Create Account</p>
                        <div className="box1" ><div className="a">Evonesia1@gmail.com</div></div>
                        <div className="box2" ><div className="a">Evonesia</div></div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;