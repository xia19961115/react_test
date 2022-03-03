/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-03 12:10:22
 */
import React from "react";
import { Layout,Breadcrumb } from "antd";
import { Route,Routes, useNavigate, useLocation } from "react-router-dom";
import routes from "@/routes/index.js";
// import BaseRoute from "@/routes/base.js";
import NavBar from "@/components/Nav/Bar";
import NavHead from "@/components/Nav/Head";
import NavFooter from "@/components/Nav/Footer";
// import Home from "../../pages/Home";
const { Content } = Layout;

export default function SilderBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const router = useRoutes(routes);
  // const BaseRoter = useRoutes(BaseRoute);
  let [path,setPath] = React.useState([])
  let [arr,setArr] = React.useState([])
  const isLogin = true
  // 检测权限ID的变化
  React.useEffect(() => {
    if (!localStorage.getItem('roleList')) {
      navigate('/login')
      return
    }
    const Base =routes.filter((item) => localStorage.getItem('roleList').includes(item.roleId))
    console.log(Base);
    // 路由列表数组
    setPath([...path,...Base])
    // 路由名数组
    setArr([...arr,...Base.map((item) => item.path)])
  // eslint-disable-next-line
  },[localStorage.getItem('roleList')])
  React.useEffect(()=>{
    const newName = pathname.replace(/\/main\//gi,'')
    // console.log(newName);
    const Base =routes.filter((item) => localStorage.getItem('roleList').includes(item.roleId))
    console.log(Base);
    // 路由列表数组
    setPath([...path,...Base])
    // 路由名数组
    setArr([...arr,...Base.map((item) => item.path)])
    if (arr.includes(newName)) {
      console.log(1)
      // console.log(routes);
      sessionStorage.setItem('bar',pathname)
      let a = routes.find(item => item.path === newName)
      sessionStorage.setItem('openKeys',a.title)
    }
      // eslint-disable-next-line
  },[])
  React.useEffect(() => {
    const newName = pathname.replace(/\/main\//gi,'')
    if (!isLogin && pathname !== '/login') {
      navigate('/login')
      if (pathname === '/login') {
        return
      }
    } else{
      if (arr.includes(newName)) {
        console.log(1)
        console.log(routes);
        sessionStorage.setItem('bar',pathname)
        let a = routes.find(item => item.path === newName)
        console.log('-----------', a)
        // sessionStorage.setItem('openKeys',a.title)
        // if (pathname === '/main/home') {
        //   sessionStorage.setItem('bar','/main/home')
        //   sessionStorage.setItem('openKeys','企业名')
        // }
      }

    }
  // eslint-disable-next-line
  },[pathname])
  return (
    <Layout style={{ height: "100vh" }}>
      <NavBar path={routes}/>
      <Layout>
        <NavHead />
        <Content style={{ margin: "10px 16px 0", overflow: "auto" }}>
          <Breadcrumb style={{ margin: '8px 0 ' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "calc(100% - 50px)", backgroundColor: "#fff", overflow: "auto" }}
          >
            <Routes>
                {
                  routes.map(item => {
                    return (
                      <Route path={item.path} element={item.element} key={item.path} ></Route>
                    )
                  })
                }
            </Routes>
          </div>
        </Content>
        <NavFooter />
      </Layout>
    </Layout>
  )
}
