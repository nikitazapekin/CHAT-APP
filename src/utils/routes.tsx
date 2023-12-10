
import React from "react"
import {Route, Routes, Navigate}  from "react-router-dom"
import { SIGN_UP_ROUTE, SIGN_IN_ROUTE, ACCOUNT_ROUTE, CHAT_ROOM_ROUTE, GROUP_ROOM_ROUTE } from "./consts.ts"
 import RegisterPage from "../pages/registerPage/registerPage.tsx"
 import LoginPage from "../pages/loginPage/loginPage.tsx"
 import AccountPage from "../pages/accountPage/accoundPage.tsx"
 import ChatRoom from "../pages/chatRoom/chatRoom.tsx"
 import GroupPage from "../pages/groupPage/groupPage.tsx"
const publicRoutes=[
 {
    path: SIGN_UP_ROUTE,
    Component: RegisterPage
 }, 
 {
    path: SIGN_IN_ROUTE,
    Component: LoginPage
 }, 
 {
    path: ACCOUNT_ROUTE,
    Component: AccountPage
 }, 
 {
   path: CHAT_ROOM_ROUTE,
   Component: ChatRoom
}, 
{
   path: GROUP_ROOM_ROUTE,
   Component: GroupPage
}, 
]
const privateRoutes =[
    {
        path:  SIGN_IN_ROUTE,
        Component:LoginPage
     },
     {
        path:  SIGN_UP_ROUTE,
        Component:RegisterPage
     },
     {
        path: ACCOUNT_ROUTE,
        Component: AccountPage
     }, 
     {
      path: CHAT_ROOM_ROUTE,
      Component: ChatRoom
   }, 
   {
      path: GROUP_ROOM_ROUTE,
      Component: GroupPage
   }, 
]
interface AppRoutesProps {
isAuthenticated: boolean,
socketInstance
}
const AppRoutes=({isAuthenticated, socketInstance}: AppRoutesProps)=> {
   
    return isAuthenticated ?  
    (
        <Routes>
{privateRoutes.map(({path, Component})=>( <Route  key={path} path={path} element={<Component socketInstance={socketInstance}  />} />)

)}
{/*<Route path="*" element={<Navigate replace to={SIGN_UP_ROUTE} />} />  */}
        </Routes>
    )
    :
    (
        <Routes>
{publicRoutes.map(({path, Component})=> (<Route   key={path} path={path} element={<Component socketInstance={socketInstance}  />}  />)
)}
{/*<Route path="*" element={<Navigate replace to={SIGN_UP_ROUTE} />} />   */}
        </Routes>
    )
};
export default AppRoutes