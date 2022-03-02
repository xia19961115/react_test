/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-02 11:00:03
 * @LastEditTime: 2022-03-02 17:22:57
 */
import Login from '@/pages/Login'
import Found404 from "@/pages/Foud404"
import {Navigate} from 'react-router-dom'
const BaseRoutes = [
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/*',
        element:<Found404 />
    },
    {
        path:'/',
        element:<Navigate to='/home' />
    }
]
export default BaseRoutes