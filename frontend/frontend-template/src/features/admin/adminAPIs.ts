import {adminLogout, AdminState, resetAdminState, setAdminState} from "./adminSlice"
import axios from "axios"
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

export interface AdminResponse {
    id: string
    userName: string
    email: string
    role: string
    status: string
}

export interface ErrorResponse {
    timestamp: string,
    status: number,
    error: string,
    message: string
}

export const adminRegistrationAPI = async (adminData: AdminState, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.post("http://localhost:8080/admin/registration", adminData);
        dispatch(setAdminState(response.data as AdminResponse));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            console.error(error.response as ErrorResponse);
        } else {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            console.error({
                timestamp: new Date().toISOString(),
                status: 0,
                error: "Not Specified",
                message: "Error Occurred"
            });
        }
    }
};

export const adminLoginAPI = async (adminData: AdminState, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.post("http://localhost:8080/admin/login", adminData);
        dispatch(setAdminState(response.data as AdminResponse));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            console.error(error.response as ErrorResponse);
        } else {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            console.error({
                timestamp: new Date().toISOString(),
                status: 0,
                error: "Not Specified",
                message: "Error Occurred"
            });
        }
    }
};

export const validationAPI = async (id: string, dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.post("http://localhost:8080/admin/get", id);
        dispatch(setAdminState(response.data as AdminResponse));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            console.error(error.response as ErrorResponse);
        } else {
            dispatch(resetAdminState());
            dispatch(adminLogout());
            console.error({
                timestamp: new Date().toISOString(),
                status: 0,
                error: "Not Specified",
                message: "Error Occurred"
            });
        }
    }
};
