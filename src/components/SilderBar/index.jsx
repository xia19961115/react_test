/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-02 18:07:24
 */
import React from "react";
import { Layout } from "antd";
import { Route,Routes, useNavigate, useLocation } from "react-router-dom";
import routes from "@/routes/index.js";
// import BaseRoute from "@/routes/base.js";
import NavBar from "@/components/Nav/Bar";
import NavHead from "@/components/Nav/Head";
import NavFooter from "@/components/Nav/Footer";
import Home from "../../pages/Home";
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
  React.useEffect(() => {
    if (!isLogin && pathname !== '/login') {
      navigate('/login')
      if (pathname === '/login') {
        return
      }
    } else{
      if (arr.includes(pathname)) {
        console.log(arr)
        sessionStorage.setItem('bar',pathname)
        let a = routes.find(item => item.path === pathname)
        // document.title = a.routeName
        sessionStorage.setItem('openKeys',a.title)
        // if (pathname === '/home') {
        //   sessionStorage.setItem('bar','/home')
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
        <Content style={{ margin: "24px 16px 0", overflow: "auto" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100%", backgroundColor: "#fff" }}
          >
            <Routes>
              <Route path="/main/home" element={<Home />}></Route>
                {/* {
                  routes.map(item => {
                    return (
                      <Route index={item.index} path={item.path} element={item.element} key={item.path} ></Route>
                    )
                  })
                } */}
            </Routes>
          </div>
        </Content>
        <NavFooter />
      </Layout>
    </Layout>
  )
}
