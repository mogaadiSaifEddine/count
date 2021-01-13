import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters :[
            {id:0,value:5},
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0}, {id:5,value:0}, {id:6,value:0},
        ]
     }
handleDecrement=counter=>{
    const counters=[...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value===0? alert('counter can not be less than zero , thank you'):  counters[index].value--
    this.setState({counters})
}
     
     handleIncrement=counter=>{
const counters =[...this.state.counters]
const index= counters.indexOf(counter)
counters[index].value ++
console.log(counter)
this.setState(counters)
     }


     handleReset =()=>{
          const counters =  this.state.counters.map(count=> {count.value=0
        return count} )
               this.setState({counters})
     }


     handleDelete=counterId=>{
     const counters = this.state.counters.filter(counter=>counter.id!==counterId)
     this.setState({counters})
     }

     render() { 
        return (
            <div>
                <button  onClick={this.handleReset} className="m-2 btn btn-primary">Reset</button>
                {this.state.counters.map(counter=><Counter  onIncrement={this.handleIncrement}
                                                            onDecrement ={this.handleDecrement}
                                                            key={counter.id}
                                                            onReset={this.handleReset}
                                                            counter= {counter}
                                                            onDelete={this.handleDelete}
                                                            selected={true} > <h4>Counter number {counter.id}</h4></Counter>)} 
            

            </div> 
          );
    }
}
 
export default Counters;