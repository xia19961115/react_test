import React from 'react'
import {connect} from 'react-redux'
import {
  createAsyncIncrementAction,
  createIncrementAction
} from '@/redux/actions/countAction'
const Base =(props) => {
  console.log(props);
  return (
    <div>{props.count}</div>
  )
}
const mapStateToProps = (state) =>{
  return {
      count:state.he
  }
}
const mapDispatchToProps = {
  add:createIncrementAction,
  asyncAdd:createAsyncIncrementAction,
}
const CountContainerMin = connect(mapStateToProps,mapDispatchToProps)(Base)

export default CountContainerMin