import "./Register.css";
import axios from "axios";
import loginImg from '../../images/Metaverse1.png';
import logo1 from '../../images/EVONESIA putih no bg 3.png';
import logo2 from '../../images/EVONESIA putih fix 5.png';
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {

    //fungsi untuk login ya mazzzehh
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [PasswordConfirmation, setPasswordConfirmation] = useState("");

    //go validasi register yo
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(
        () => {
            if (localStorage.getItem('token')) {
                navigate('/home');
            } // eslint-disable-next-line
        }, []
    );

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', PasswordConfirmation);

        await axios.post('http://127.0.0.1:8000/api/auth/register', formData)
            .then(() => {
                navigate('/');

            }).catch((error) => {
                console.log(error.response.data);
                setValidation(error.response.data);
            })
    }
    return (<>
        <div className="main-register">
            <div className="Register-contain">
                <img className='logo2' src={logo2} alt="" />
                <img className='vector' src={loginImg} alt="" />
                <img className='logo1' src={logo1} alt="" />

                <div className="contain">
                    <form onSubmit={registerHandler} className="form-reg">
                        <div className="input-div">
                            <div className="div">
                                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tulisakan Nama Anda" />
                                {
                                    validation.name && (
                                        <small className="text-danger">
                                            {validation.name[0]}
                                        </small>
                                    )
                                }
                            </div>
                        </div>

                        <div className="input-div">
                            <div className="div">
                                <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
                                {
                                    validation.email && (
                                        <small className="text-danger">
                                            {validation.email[0]}
                                        </small>
                                    )}</div></div>
                        <div className="input-div">
                            <div className="div">

                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                                {
                                    validation.password && (
                                        <small className="text-danger">
                                            {validation.password[0]}
                                        </small>
                                    )}</div></div>

                        <div className="input-div">
                            <div className="div">

                                <input type="password" className="form-control" id="password_confirmation" value={PasswordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="*********" />
                            </div></div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Create Account</button>
                    </form>
                    <div className="icon3">
                        <div className="iconig"></div>
                        <div className="iconlink"></div>
                        <div className="icongit"></div>
                    </div>
                    <div className="under-form">
                        <div className="router">Alredy have an account ?  <Link to='/'>Login</Link></div>
                        <p >Create Account</p>
                        <div className="box1" ><div className="a">Evonesia1@gmail.com</div></div>
                        <div className="box2" ><div className="a">Evonesia</div></div>
                    </div>


                    <div>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
}


export default Register;