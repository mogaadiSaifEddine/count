import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './todo'
const TodoList=()=>{
  const list=useSelector(state=>state)
    return( 
      <div>
     
  { list.map(el=> <Todo key={el.id} el={el}/> )}
   </div>
   
    )

}
export default TodoList