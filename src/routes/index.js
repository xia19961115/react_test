/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-02 18:08:26
 */
import About from "../pages/About"
import Home from "../pages/Home"
import My from '@/pages/My'
import File from "../pages/File"
// import Welcome from "../pages/Welcome"
// import Login from "../pages/Login"
// import {Navigate} from 'react-router-dom'
const routes = [
    {
        path:'/main/home',
        routeName:'主页',
        title:'企业名',
        roleId:'1',
        element:<Home />
    },
    {
        path:'/main/about',
        routeName:'关于',
        title:'商家库',
        roleId:'1',
        element:<About />
    },
    {
        path:'/main/my',
        routeName:'个人中心',
        title:'商家库',
        roleId:'1',
        element:<My />
    },
    {
        path:'/main/file',
        routeName:'档案',
        title:'数据库',
        roleId:'1',
        element:<File />
    }
]
export default routes