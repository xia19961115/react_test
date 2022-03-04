import {INCREMENT} from '../constant'
const initState = 0 // 初始化数据根据业务来
/*
    countReducer 必须是一个纯函数
      纯函数必须遵循
        1)不得改写参数数据 (传递进来的参数不能进行修改,传进来啥就是啥)
        2)不会产生任何副作用，例如网络请求，输入和输出设备
        3)不能调用Date.now()或者Math.random()等不纯的方法
     redux中的 reducer 必须是一个纯函数
*/ 
export default function countReducer(preState = initState,action) {
    // console.log(preState,action); // 初始化的情况 type: "@@redux/INIT7.k.1.f.d.3"
    // 初始化的时候preState 为undefined
    // if (preState === undefined) preState = 0 // 一般用函数默认值的方式
    // 从action对象中获取: type、data
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT: // 加法
        console.log('-------');
        /*
            假设preState 是一个数组 redux 只会判断内存地址是否相同(push,unshift不会去改变preState中的内存地址)
            push,unshift 等方法会改变原数组  就不符合 不得改写参数数据
        */ 
            return preState + data
        case 'decrement':
            return preState - data
        default: // 初始化的情况
            return preState
    }
}