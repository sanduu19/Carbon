import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AdminState, selectAdmin, updateAdmin} from "../features/admin/adminSlice";
import {useLoaderData, useNavigate} from "react-router-dom";
import {isLoggedIn} from "./MainLayout";
import {adminLoginAPI} from "../features/admin/adminAPIs";

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    value={admin.userName}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={admin.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
