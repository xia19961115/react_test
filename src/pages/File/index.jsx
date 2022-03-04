/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 15:36:07
 * @LastEditTime: 2022-03-04 18:41:49
 */
import React,{useEffect,useRef} from 'react'

const File = () => {
  const dom = useRef()
  useEffect(() => {
    console.log(dom.current.style.color='red');
  },[])
  return (
    <div ref={dom}>File</div>
  )
}
export default File