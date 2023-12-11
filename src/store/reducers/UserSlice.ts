
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
type ArrayOfMessages = {
    event: string;
    from: string;
    text: string;
    too: string
  };
  export interface Mes {
 event: string,
 from: string,
 text: string
  }
  interface IGroup {
    title: string,
    participants: String[]
  }
interface UserState {
   
    isLoading: boolean;
    error: string;
    isVisiblePanel: boolean,
    isVisibleTextPanel: boolean,
    isVisibleEmojePanel: boolean,
    isVisibleGroup: boolean,
    message: string,
    userList: String[],
    author: string ,
    currentUser: string,
    recipientSelected: string,
    arrayOfMessages: {
        data: Array<{
            event: string,
            from: string,
            text: string,
            too: string
            }>
 
    },
    arrayOfGroups: {
data: Array<{
    title: string,
    participants: String[]
}>
    },
 
}

const initialState: UserState = {
    isLoading: false,
    error: '',
    isVisiblePanel: true,
    isVisibleGroup: false,
    isVisibleEmojePanel: false,
 isVisibleTextPanel: true,
    message: "",
    author: "",
    currentUser: "",
    userList: [],
    recipientSelected: "",
    arrayOfMessages: {
        data: []
    },
    arrayOfGroups: {
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
        },
clearUserList: (state) => {
state.userList= []
},
      settUserList: (state, action: PayloadAction<string>)=>{
        state.userList.push(action.payload);
                    }, 
setGroup: (state, action: PayloadAction<IGroup>)=> {
state.arrayOfGroups.data.push(action.payload)
},
        setCurrentUsername: (state, action: PayloadAction<string>)=>{
state.currentUser =action.payload
        },
        setVisibleTextPanel: (state, action: PayloadAction<boolean>)=> {
state.isVisibleTextPanel =action.payload
        },

        setVisibleEmojePanel: (state, action: PayloadAction<boolean>)=> {
            state.isVisibleEmojePanel =action.payload
                    },
                    setVisibleGroup: (state )=> {
                     state.isVisibleGroup = !state.isVisibleGroup
                                },
            


        setRecipient: (state, action: PayloadAction<string>)=>{ 
state.recipientSelected=action.payload
        },
        addMessage: (state, action: PayloadAction<ArrayOfMessages>) => {
            const { event, from, text, too } = action.payload;
      
    const el = {event, from,  text, too}

   state.arrayOfMessages.data.push(el)
 
         
          },

    },
 
})

export default userSlice.reducer;

 