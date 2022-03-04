/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 14:40:42
 * @LastEditTime: 2022-03-04 19:59:54
 */
import React from "react";
import { Layout, Menu } from "antd";
import {
  // DesktopOutlined,
  // PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  // UserOutlined,
} from "@ant-design/icons";
import "./index.less";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default function NavBar(porps) {
  let { path, openkeys, bar } = porps;
  const navigate = useNavigate();
  let [arr,setArr] = React.useState([])
  function arrayTransfer(data) {
    const listArr = [];
    data.forEach((el) => {
      if (el.path==='welcome') return
      for (let i = 0; i < listArr.length; i++) {
        if (listArr[i].title === el.title) {
          listArr[i].listInfo.push({
            title: el.title,
            path: el.path,
            routeName:el.routeName,
            component: el.element
          });
          return;
        }
      }
      listArr.push({
        title: el.title,
        listInfo: [
          {
            title: el.title,
            path: el.path,
            routeName:el.routeName,
            component: el.element
          },
        ],
      });
    });
    // console.log(';',listArr)
    return listArr;
  }
  const handleGoPage = (el) => {
    sessionStorage.setItem('bar','/main/'+el.path)
    sessionStorage.setItem('openKeys',el.title)
    navigate(el.path)
  } 
  React.useEffect(()=>{
    const handleBarInt = ()=> {
      // setNum(num+1)
      const a = arrayTransfer(path)
      setArr(() => {
        return [...arr,...a]
      })
    }
    handleBarInt()
// eslint-disable-next-line
  },[])
  return (
    <div>
      <Sider className="NavBar">
        <div className="NavBar-logo">测试后台</div>
        <Menu mode="inline"
         defaultOpenKeys={[openkeys]}
         selectedKeys={[bar]}>
          {
            arr.map((item) =>
              <SubMenu
                key={item.title}
                title={item.title}>
                {
                  item.listInfo.map(el => <Menu.Item onClick={()=>handleGoPage(el)} key={'/main/'+ el.path}>{el.routeName}</Menu.Item>)
                }
              </SubMenu>
            )
          }
        </Menu>
      </Sider>
    </div>
  );
}
