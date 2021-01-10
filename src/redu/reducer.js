import {AddTodo, DeletTodo, DoneTodo, EditTodo,FilterAll,FilterDone,FilterDoneNot,SaveTodo} from './actTyp'
const initialState=
[
    {id:0,edite:false,description:"Task1",isDone:false},
    {id:1,edite:false,description:"Task2",isDone:false}
]

export const reducer=(state=initialState,action)=>{
    let newTasks=state
    
switch(action.type){
    
case AddTodo: return [...newTasks,action.payload];
case EditTodo: return newTasks.map(el=>el.id===action.payload?{...el,edite:!el.edite}:el) 

case SaveTodo: return newTasks.map(el=>el.id===action.payload.index?{...el,description:action.payload.editeText,edite:!el.edite}:el);
case DeletTodo: return newTasks.filter(el=>el.id!==action.payload)
case DoneTodo: return newTasks.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)
case FilterAll:return state

case FilterDone:return newTasks.filter(el=>el.isDone===true)
case FilterDoneNot:return newTasks.filter(el=>el.isDone===false)

default : return state ;


}


}
