import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'

//汇总所有的reducer变为一个总的reducer
const allReducer =  combineReducers({
	he:countReducer
})

export default allReducer
