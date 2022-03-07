/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-03-02 11:00:03
 * @LastEditTime: 2022-03-07 14:39:00
 */
import React from 'react'
import './index.less'
import { Table } from 'antd';
const Home = () => {
  const dataSource = [];
  for (let i = 0; i < 46; i++) {
    dataSource.push({
      key: i,
      name: `胡彦祖${i}`,
      age: 32,
      address: `西湖区湖底公园${i}号`,
    });
  }
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      // value 会拿到dataSource中绑定的dataIndex字段
      // render 函数相等于 vue中的插槽
      render: value => value+1
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }
  ]
  let pagination ={
    showQuickJumper:true, // 	是否可以快速跳转至某页
    showSizeChanger:true, // 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
    total:46,
    pageSizeOptions : [5,10,20] // 	指定每页可以显示多少条
  }
  let loading = false
  const handleTableChange = (...args) => {
    /**
     * 第一个参数 pagination :分页
     * 第二个参数 filters:排序
     * 第三个参数 sorter:筛选
     * 第四个参数 {currentDataSource :dataSource 数据列表, action:行为(pagination|filters|sorter)}
    */
    loading = true
    pagination = {...args[0]}
    console.log(pagination);
    console.log(args)
    setTimeout(()=>{
      loading = false
    },1000)
  }
  return (
    <div>
      <Table 
        dataSource={dataSource}
        loading={loading}
        pagination={pagination}
        columns={columns}
        onChange={handleTableChange}
         />
    </div>
  )
}
export default Home
