import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {AdminResponse} from "./adminAPIs";

export interface AdminState {
    id: string | null
    userName: string
    email: string
    password: string
    role: string
    status: string
}

const initialState:AdminState = {
    id: null,
    userName: "",
    email: "",
    password: "",
    role: "",
    status: "Pending",
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        updateAdmin: (state:AdminState, action: PayloadAction<{ field: string, value: string }>) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetAdminState: () => initialState,
        setAdminState: (state:AdminState, action: PayloadAction<AdminResponse>) => {
            const { id, userName, email, role, status} = action.payload;
            state.id = id;
            state.userName = userName;
            state.email = email;
            state.role = role;
            state.password = "";
            state.status = status;
            localStorage.setItem("IsLoggedIn", "LoggedIn");
            localStorage.setItem("id", id);
        },
        adminLogout: () => {
            localStorage.setItem("IsLoggedIn", "LoggedOut");
            localStorage.setItem("id", "");
        },
    },
})

export const { updateAdmin, resetAdminState, setAdminState, adminLogout } = adminSlice.actions
export const selectAdmin = (state: RootState) => state.admin
export default adminSlice.reducer
