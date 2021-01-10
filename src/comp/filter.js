import { filterAll,filterDone, filterDoneNot } from '../redu/act';
import  React from 'react'
import {useDispatch} from 'react-redux'
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Filter1 =()=>{
const dispatch=  useDispatch()
const filterdone =()=>{
    dispatch(filterDone())
   } 
const filterdonenot =()=>{
    dispatch(filterDoneNot())
   }  
const filterall =()=>{
    dispatch (filterAll())
   }  ; 
   return (
   
    <div style={{display:"flex",flexDirection:"column"}}>
    <Button variant="outlined" color='#18afc9' onClick={filterall}> Show Both</Button>    
    <Button variant="outlined" color="#18afc9" onClick={filterdone}> Show Done</Button>    
    <Button variant="outlined" color="#18afc9" onClick={filterdonenot}> Show Not Done</Button>    
</div>
   );
};
export default Filter1