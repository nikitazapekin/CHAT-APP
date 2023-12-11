import {AppDispatch} from "../store.ts";

import axios from "axios";
import {userSlice} from "./UserSlice.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { useAppDispatch } from "../../hooks/redux.ts";
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
};
interface IGroup {
  title: string | any | null,
  participants: String[]
}
export const setGroup = (visibility: IGroup) => (dispatch: AppDispatch) => {
 
    dispatch(userSlice.actions.setGroup(visibility));
  
};
export const setVisibleTextPanel = (visibility: boolean) => (dispatch: AppDispatch) => {
 
    dispatch(userSlice.actions.setVisibleTextPanel(visibility));
  
};

export const setVisibleGroup = ( ) => (dispatch: AppDispatch) => {
  
   dispatch(userSlice.actions.setVisibleGroup( ));
};
export const setVisibleEmojePanel = (visibility: boolean) => (dispatch: AppDispatch) => {
      dispatch(userSlice.actions.setVisibleEmojePanel(visibility));
  };

  export const settUserList = (visibility:string) => (dispatch: AppDispatch) => {
      dispatch(userSlice.actions.settUserList(visibility));
  };
  export const clearUserList = () => (dispatch: AppDispatch) => {
      dispatch(userSlice.actions.clearUserList( ));
  };
