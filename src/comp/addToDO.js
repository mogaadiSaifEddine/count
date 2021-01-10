import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redu/act';
import TextField from '@material-ui/core/TextField';

const Addtodo=({handleAdd})=>{
    const [text,setText]=useState("")
    const dispatch=useDispatch()
   
     return(  
<div style={{display:'flex', flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'center'}}>
    
<form  onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTodo({id:Math.random(),edite:false,description:text,isDone:false}));
        setText("");
      }}>
      <TextField variant="outlined" color='#18afc9' placeholder="Add New To-Do For Today " margin="normal" value={text} onChange={(e)=>setText(e.target.value)}  />
    </form>
    </div>
   
</div>

    );
}

export default Addtodo