import React from "react";
import './App.css';
import Personne from "./Person";

class App extends React.Component {
  constructor() {
    console.log("constructor()");
    super();
    this.state = {
     
      visibilty:false,
    }
    };
 
    VisibiltyFun = () => {
    this.setState({
      visibilty: !this.state.visibilty
    });
  };
  
  render() {

  return (
    <div className="App">
     <hr />
      <button onClick={this.VisibiltyFun}>
        {this.state.visibilty ? "Hide profile " : "Show profile"}
      </button>
      {this.state.visibilty && <Personne/>}
   
    </div>
  );
}
}
export default App;