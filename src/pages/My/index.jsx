/*
 * @Description:
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-01 15:36:13
 * @LastEditTime: 2022-03-01 15:36:13
 */
import React from "react";
const My = () => {
  const [num, setNum] = React.useState(0);
  // React.useEffect(() => {
  //   // console.log(num);
  //   // eslint-disable-next-line
  // }, [num]);
  const handleClick = () => {
    setNum(num + 1);
    console.log(num)
  };
  return <div onClick={handleClick}>My</div>;
};
export default My;
