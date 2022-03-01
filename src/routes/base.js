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
        element:<Navigate to='/login' />
    }
]
export default BaseRoutes