import {AppDispatch} from "../store.ts";

import axios from "axios";
import {IUser} from "../../models/IUser.ts";
import {userSlice} from "./UserSlice.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { useAppDispatch } from "../../hooks/redux.ts";

 export const fetchUsers = () => async (dispatch: AppDispatch) => {
     try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
   } catch (e) {
         dispatch(userSlice.actions.usersFetchingError(e.message))
     }
}


/*
export const switchVisibilityOfPanel =(dispatch: AppDispatch)=> {
   // const dispatch= useAppDispatch()
dispatch(userSlice.actions.switchVisibilityOfPanel())
}
  */
 
export const switchVisibilityOfPanel = (visibility: boolean) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.switchPanelVisibility(visibility));
}; 
export const typeMessage = (data: { message: string; author: string }) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.typeMessage(data));
};


export const setCurrentUsername = (currentUsername: string) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.setCurrentUsername(currentUsername));
};
export const setCRecipient = (name: string) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.setRecipient(name));
};


export const addMessage = (event: string, from: string, text: string, to: string) => (dispatch: AppDispatch) => {
    const privateMessage = {event: event, from: from, text:text, too: to}
    dispatch(userSlice.actions.addMessage(privateMessage));
   // dispatch(userSlice.actions.setRecipient(name));
};




export const setVisibleTextPanel = (visibility: boolean) => (dispatch: AppDispatch) => {
  //  const privateMessage = {event: event, from: from, text:text, too: to}
    dispatch(userSlice.actions.setVisibleTextPanel(visibility));
   // dispatch(userSlice.actions.setRecipient(name));
};



export const setVisibleEmojePanel = (visibility: boolean) => (dispatch: AppDispatch) => {
    //  const privateMessage = {event: event, from: from, text:text, too: to}
      dispatch(userSlice.actions.setVisibleEmojePanel(visibility));
     // dispatch(userSlice.actions.setRecipient(name));
  };
/*
export const typeMessage = (message: string, author: string) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.typeMessage({message, author}));
};*/