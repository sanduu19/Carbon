import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FieldState, Field, selectFields } from "../features/fields/fieldSlice";
import '../css/splashpage.css'
import {isLoggedIn} from "./MainLayout";
import {useLoaderData} from "react-router-dom";

export function loader() {
    return isLoggedIn();
}

const Splash = () => {
    const isLoggedIn = useLoaderData();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(isLoggedIn);
        //dispatch(getAllFieldsAPI());
    }, [isLoggedIn]);

    return (
        <div className="container">
            <p>{localStorage.getItem("IsLoggedIn")}</p>
        </div>
    );
};

export default Splash;
