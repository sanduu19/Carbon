import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import '../css/AdminRegistration.css'
import {
    AdminState,
    selectAdmin,
    updateAdmin,
} from "../features/admin/adminSlice";
import {adminRegistrationAPI} from "../features/admin/adminAPIs";
import {Link, redirect, useLoaderData, useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";
import bg2 from '../components/Assets/bgggg.jpg'

export function loader() {
    return isLoggedIn();
}

const Registration = () => {
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
        await adminRegistrationAPI(admin, dispatch);
        navigate('/admin');
    };

    return (
        <div className="container1">
            <div className="left-container" style={{backgroundImage:`url(${bg2})`}}>
            <h1>Welcome to our platform!</h1>
            <button className="button1"><Link className='towhite' style={{textDecoration:'none'}}  to='/login'>Login</Link></button>
            </div>
            <div className="right-container">
            <div className="header">
            <div className="text">Register</div>
            </div>
             <div className='inputs'>
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
                    type="email"
                    name="email"
                    value={admin.email}
                    onChange={handleChange}
                    placeholder="Email"
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
                <div className="input">
                <input
                    type="text"
                    name="role"
                    value={admin.role}
                    onChange={handleChange}
                    placeholder="Role"
                />
                </div>
                <div className="submit-container">
                <button className='button' type="submit">Register</button>

                </div>
                
            </form>
        </div>

        </div>
        </div>
       
       
    );
};

export default Registration;
