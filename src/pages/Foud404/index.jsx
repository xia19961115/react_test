import React from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
const Found404 = () => {
  const navigate = useNavigate()
  function handleGoHome() {
    navigate('/login')
  }
  return (
    <div>
      <div className="wscn-http404-container">
        <div className="wscn-http404">
          <div className="pic-404">
            <img className="pic-404__parent" src={require('../../image/404_images/404.png').default} alt="404" />
            <img className="pic-404__child left" src={require('../../image/404_images/404_cloud.png').default} alt="404" />
            <img className="pic-404__child mid" src={require('../../image/404_images/404_cloud.png').default} alt="404" />
            <img className="pic-404__child right" src={require('../../image/404_images/404_cloud.png').default} alt="404" />
          </div>
          <div className="bullshit">
            <div className="bullshit__oops">出错啦!</div>
            <div className="bullshit__headline">找不到该页面</div>
            <div onClick={handleGoHome} className="bullshit__return-home">回到首页</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Found404
