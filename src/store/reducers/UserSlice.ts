import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    isVisiblePanel: boolean,
    message: string,
    author: string ,
    currentUser: string,
    recipientSelected: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isVisiblePanel: true,
    message: "",
    author: "",
    currentUser: "",
    recipientSelected: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching: (state) => {
            state.isLoading = false;
        },
        usersFetchingSuccess: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        usersFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        switchPanelVisibility: (state, action: PayloadAction<boolean>) => {
            state.isVisiblePanel = action.payload;
        },
        typeMessage: (state, action: PayloadAction<{message: string, author:string}> ) => {
            state.message = action.payload.message;
            state.author=action.payload.author;
            console.log("AUTH"+state.author+":"+state.message)
        },
        setCurrentUsername: (state, action: PayloadAction<string>)=>{
state.currentUser =action.payload
        },
        setRecipient: (state, action: PayloadAction<string>)=>{ 
state.recipientSelected=action.payload
console.log("CIRRENT RECIPIENT"+state.recipientSelected)
        },

    },
 
})

export default userSlice.reducer;