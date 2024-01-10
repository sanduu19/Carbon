import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {adminLogout, AdminState, resetAdminState, selectAdmin} from "../features/admin/adminSlice";
import {useLoaderData, useNavigate} from "react-router-dom";
import {validationAPI} from "../features/admin/adminAPIs";

export async function loader() {
    const Id = localStorage.getItem("id");
    const isLoggedIn = localStorage.getItem("IsLoggedIn");
    if (isLoggedIn === "LoggedIn" && Id.length > 0){
        return "LoggedIn"
    }
    return "Wrong Authentication"
}

const AdminPanel = () => {
    const loggedIn = useLoaderData();
    const admin = useAppSelector<AdminState>(selectAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(async () => {
        if (loggedIn === "LoggedIn") {
            await validationAPI(localStorage.getItem("id"), dispatch);
        } else {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            navigate("/");
        }
    }, [loggedIn]);

    return (
        <div>
            <p>Admin Panel</p>
        </div>
    );
};

export default AdminPanel;
