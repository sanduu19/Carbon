import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import '../css/AdminRegistration.css'
import {
    AdminState,
    selectAdmin,
    updateAdmin,
} from "../features/admin/adminSlice";
import {adminRegistrationAPI} from "../features/admin/adminAPIs";
import {redirect, useLoaderData, useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";

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
            <div className="left-container">
            <h1>Welcome to our platform!</h1>
            </div>
            <div className="right-container">
             <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    value={admin.userName}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={admin.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={admin.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    type="text"
                    name="role"
                    value={admin.role}
                    onChange={handleChange}
                    placeholder="Role"
                />
                <button type="submit">Register</button>
            </form>
        </div>

        </div>
        </div>
       
       
    );
};

export default Registration;
