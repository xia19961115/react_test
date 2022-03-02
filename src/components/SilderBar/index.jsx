/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-02 12:24:33
 */
import React from "react";
import { Layout } from "antd";
import { useNavigate, useRoutes, Outlet, useLocation } from "react-router-dom";
import routes from "@/routes/index.js";
import BaseRoute from "@/routes/base.js";
import NavBar from "@/components/Nav/Bar";
import NavHead from "@/components/Nav/Head";
import NavFooter from "@/components/Nav/Footer";
const { Content } = Layout;

export default function SilderBar() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  // const [isLogin,setisLogin] = React.useState(true)
  const { pathname } = useLocation();
  const router = useRoutes(routes);
  const BaseRoter = useRoutes(BaseRoute);
  const path = routes.filter((item) => item.path !=='/');
  const arr = routes.map((item) => item.path);
  const isLogin = true
  React.useEffect(() => {
    if (!isLogin) {
      navigate('/login')
      if (pathname === '/login') {
        return
      }
    } else{
      sessionStorage.setItem('bar',pathname)
      let a = routes.find(item => item.path === pathname)
      sessionStorage.setItem('openKeys',a.title)
    }
  // eslint-disable-next-line
  },[pathname])
  return arr.includes(pathname) ? (
    <Layout style={{ height: "100vh" }}>
      <NavBar path={path}/>
      <Layout>
        <NavHead />
        <Content style={{ margin: "24px 16px 0", overflow: "auto" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "100%", backgroundColor: "#fff" }}
          >
            {router}
            <Outlet />
          </div>
        </Content>
        <NavFooter />
      </Layout>
    </Layout>
  ) : (
    <div>
      {BaseRoter}
      <Outlet />
    </div>
  );
}
