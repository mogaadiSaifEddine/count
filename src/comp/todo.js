import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { deletTodo, doneTodo, editTodo, saveTodo } from '../redu/act';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Todo=({el})=>{
    const [edittext,setEdittext]=useState(el.description)
    const dispatch=useDispatch()
const edit =()=>{
      dispatch(editTodo(el.id))
     }
const save =()=>{
 dispatch(saveTodo({index:el.id,editeText:edittext}))
}
const delet =()=>{
  dispatch(deletTodo(el.id))
 }
 const done =()=>{
  dispatch(doneTodo(el.id))
 }
 const colo='#18afc9'
    return ( 
        <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        { el.edite?
        (<div>
        <Modal.Dialog style={{ backgroundColor: 'rgb(250, 220, 239)'}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a task</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <input type="text" variant="outline-danger" value={edittext} onChange={(e)=>setEdittext(e.target.value)}></input>
      
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="dark" onClick={edit} >Close</Button>
          <Button variant="danger" onClick={save}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
         </div>
        )
        :(<div>
          
          <List>
            <ListItem key={el.id} dense button>
              <ListItemText onClick={done}  style={el.isDone? {textDecoration:'line-through'} :{textDecoration:'none',color:'#18afc9'} } primary={el.description} />
              <ListItemSecondaryAction>
              <IconButton style={{color:colo}}
                  aria-label="Edite"
                  onClick={edit} >
                  <EditIcon />
                </IconButton>
                <IconButton style={{color:colo}}
                  aria-label="Delete"
                  onClick={delet} >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        </List>
          
           </div>
        )
     }
     </>
    )

}
export default Todo