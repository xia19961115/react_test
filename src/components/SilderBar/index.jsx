/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:25:16
 * @LastEditTime: 2022-03-03 20:44:55
 */
import React from "react";
import { Layout,Breadcrumb } from "antd";
import { Route,Routes, useNavigate, useLocation } from "react-router-dom";
import routes from "@/routes/index.js";
import NavBar from "@/components/Nav/Bar";
import NavHead from "@/components/Nav/Head";
import NavFooter from "@/components/Nav/Footer";
const { Content } = Layout;

export default function SilderBar(props) {
  const {roleRoute, rolePath } = props
  const navigate = useNavigate();
  let [bar,setBar] = React.useState('')
  let [openKeys,setOpenKeys] = React.useState('')
  let [openName,setOpenName] = React.useState('')
  const { pathname } = useLocation();
  React.useEffect(() => {
    console.log(pathname)
    // 监测路由变化(非法访问直接404)
    if (!rolePath.includes(pathname)) {
      navigate('/404')
      return
    }
    sessionStorage.setItem('bar',pathname)
    let base = pathname.replace(/\/main\//gi,'')
    let a = roleRoute.find(item => item.path === base)
    sessionStorage.setItem('openKeys',a?.title)
    setBar(pathname)
    setOpenKeys(a.title)
    setOpenName(a.routeName)
  // eslint-disable-next-line
  },[pathname])
  return (
    <Layout style={{ height: "100vh" }}>
      <NavBar path={roleRoute} bar={bar} openkeys={openKeys}/>
      <Layout>
        <NavHead />
        <Content style={{ margin: "10px 16px 0", overflow: "auto" }}>
          {/* 面包屑 */}
          <Breadcrumb style={{ margin: '8px 0 ' }}>
            <Breadcrumb.Item>{openKeys}</Breadcrumb.Item>
            <Breadcrumb.Item>{openName}</Breadcrumb.Item>
          </Breadcrumb>
          {/* 主体内容 */}
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
