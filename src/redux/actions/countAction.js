/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT} from '../constant'
// 箭头函数直接返回对象时 要加() 不然会当作返回体来返回
// 同步action(返回一般对象为同步操作)
export const createIncrementAction =data => ({ type:INCREMENT, data }) 

// 明确:延迟的动作不想交给组件自身，想交给action
// 异步action，就是指action的值为函数,异步action中一般都会调用同步action,
// 异步action不是必须要用的 (也可以在方法中异步调用后在调用同步action)
export const createAsyncIncrementAction = (data,dely) =>{
    // 返回的函数中 dispatch getState 两个方法
    return (dispatch) =>{
        setTimeout(() => {
          dispatch(createIncrementAction(data))
        }, dely);
    }
}