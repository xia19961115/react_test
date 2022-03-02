/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-02 17:11:49
 */
import About from "../pages/About"
import Home from "../pages/Home"
import My from '@/pages/My'
import File from "../pages/File"
// import Login from "../pages/Login"
// import {Navigate} from 'react-router-dom'
const routes = [
    {
        path:'/home',
        routeName:'主页',
        title:'企业名',
        roleId:'1',
        element:<Home />
    },
    {
        path:'/about',
        routeName:'关于',
        title:'商家库',
        roleId:'1',
        element:<About />
    },
    {
        path:'/my',
        routeName:'个人中心',
        title:'商家库',
        roleId:'2',
        element:<My />
    },
    {
        path:'/file',
        routeName:'档案',
        title:'数据库',
        roleId:'2',
        element:<File />
    }
]
export default routes