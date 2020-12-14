import React from "react";
import image from './logo.svg';
class Person extends React.Component {
  
constructor() {
    console.log("constructor()");
    super();
    this.state = {
      fullName:"mogaadi saif eddine",
      bio:"I'am a student at Go My Code",
      imgSrc:{image},
      profession:"Student",
      timer: 0,
      intervall: null
    };
  }
  componentDidMount() {
   
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }

  

  componentWillUnmount() {
   
    clearInterval(this.state.intervall);
  }
  Show = () => {
    this.setState({
      show: !this.state.show
    });
  };
  Img = () => {
    this.setState({
      imgSrc:{image},
    });
  };
  render() {

  return (
    <div>
     <h1>FullName: {this.state.fullName}</h1>
     <p>{this.state.bio}</p>
     <img src={image} alt="profile" style={{width:400 , height:300}}/>
     <h1>Profession: {this.state.profession}</h1>
     <p>{this.state.timer}</p>
    </div>
  );
}
}
export default Person;