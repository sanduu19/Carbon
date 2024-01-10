import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AdminState, selectAdmin, updateAdmin} from "../features/admin/adminSlice";
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";
import {adminLoginAPI} from "../features/admin/adminAPIs";
import '../css/AdminLogin.css'
import bg2 from '../components/Assets/bgggg.jpg'

export function loader() {
    return isLoggedIn();
}

const Login = () => {
    const isLoggedIn = useLoaderData();
    const admin = useAppSelector<AdminState>(selectAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
       console.log(isLoggedIn);
    }, [isLoggedIn]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateAdmin({ field: name, value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await adminLoginAPI(admin, dispatch);
        navigate('/admin');
    };

    return (
        <div className="container1">
        <div className="left-container" style={{backgroundImage:`url(${bg2})`}}>
        <h1>Welcome to our platform!</h1>
        <button className="button1"><Link className='towhite' style={{textDecoration:'none'}}  to='/register'>Register</Link></button>
        </div>
        <div className='right-container'>
            <div className="header">
            <div className="text">Login</div>
            </div>
            <div className="inputs">
            <form onSubmit={handleSubmit}>
                <div className="input">
                <input
                    type="text"
                    name="userName"
                    value={admin.userName}
                    onChange={handleChange}
                    placeholder="Username"
                />
                </div>
                <div className="input">
                <input
                    type="password"
                    name="password"
                    value={admin.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                </div>
                <div className="submit-container">
                <button className='button' type="submit">Login</button>
                </div>
                
            </form>

            </div>
            
        </div>
        </div>
        
    );
};

export default Login;
