import React, { Component } from 'react';


 class Counter extends Component {
    
state={
    value:this.props.counter.value
}
    /* constructor(){
         super()
         this.handleIncrement= this.handleIncrement.bind(this)
     }*/

     
    

      render() { 
          console.log('prps' ,this.props)
        
         return (
            <div> 
                 {this.props.children}  
                 <button className="btn btn-secondary btn-sm" onClick={()=>this.props.onDecrement(this.props.counter)}>Decrement</button>             
                  <span  className={ this.getBadgeClasses()}>{this.formatcount()}</span>
                  <button onClick={()=>this.props.onIncrement(this.props.counter)}
                     className="btn btn-secondary btn-sm">Increment</button>
                  <button className="btn btn-danger btn-small m-2" onClick={() => this.props.onDelete(this.props.counter.id) }>delete</button>
           
            </div>);
     }
     getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += (this.props.counter.value === 0) ? "warning" : "primary";
         return classes;
     }

     formatcount(){
         const {value}=this.props.counter;
         return value===0 ? "zero" : value  
     }
 }
  
 export default Counter;