import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";
/*
interface ArrayOfMessages {
    event: string,
from: string,
text: string
} */
type ArrayOfMessages = {
    event: string;
    from: string;
    text: string;
  };
  export interface Mes {
 event: string,
 from: string,
 text: string
  }
  
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    isVisiblePanel: boolean,
    message: string,
    author: string ,
    currentUser: string,
    recipientSelected: string,
    arrayOfMessages: {
        data: Array<{//event: string,
            from: string,
            text: string
            }>
/*data: Array<{
    event: string,
from: string,
text: string
  }>[]  */
    }
 //  arrayOfMessages: ArrayOfMessages[]
/*  arrayOfMessages: Array<{
    event: string,
from: string,
text: string
  }>[] */
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isVisiblePanel: true,
    message: "",
    author: "",
    currentUser: "",
    recipientSelected: "",
    arrayOfMessages: {
        data: []
    }
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
        addMessage: (state, action: PayloadAction<ArrayOfMessages>) => {
            const { event, from, text } = action.payload;
        //    state.arrayOfMessages.push({ event, from, text });
     //       state.arrayOfMessages.push(action.payload);
    // const el = {event: event, from: from, text: text}
    const el = {from,  text}
    console.log("actiomn"+JSON.stringify(action.payload))
   // for(let i=0; i<action.payload.length; i++){
    //    console.log("ITEM"+JSON.stringify(action.payload.event[i]))
      //  state.arrayOfMessages.data.push(action.payload.event[i])
 //   }
    console.log("EVEMT"+JSON.stringify(event))
    console.log("ELL"+JSON.stringify(el))
    console.log("FROOOM"+from)
    console.log("TEXTT"+text)
   state.arrayOfMessages.data.push(el)
  //return { ...state, loading: false, error: action.payload, data: initialState.data };
            console.log("THIS IS AN ARRAY" +JSON.stringify(state.arrayOfMessages))
         // return {...state, arrayOfMessages: action.payload}
          },

    },
 
})

export default userSlice.reducer;


//n{"event":[{"event":"privateMessage","from":"cccsa","text":"scasac"},{"event":"privateMessage","from":"cccsa","text":"scasacsc"}]}

//{"data":[{"event":[]},{"event":[{"event":"privateMessage","from":"wdwd","text":"s dccq"}]},{"event":[{"event":"privateMessage","from":"wdwd","text":"s dccq"},{"event":"privateMessage","from":"wdwd","text":"s dccqlu"}]}]}