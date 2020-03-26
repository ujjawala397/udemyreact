//  Passing method references

import React, {Component} from 'react';
import Person from './Person';
class Passingmethodreference extends Component {
  state={
    persons:[
    {name:"ujjawal",age:22},
    {name:"aman",age:16}
    ],
    otherState:'some other value'
  }
  switchNameHandler=(newName)=>{
    // console.log('Was clicked');
    this.setState({
      persons:[
      {name: newName,age:22},
      {name:"awefhbweb",age:16}
      ]
  })
  }
  nameChangeHandler=(event)=>{
   this.setState({
      persons:[
      {name: 'max',age:2321},
      {name:event.target.value,age:16}
      ]
  }) 
  }
  render(){
    const style={
      backgroundCColor:'white',
      font: 'inherit',
      border:'1x solid blue',
      padiing:'8px',
      curson:'pointer'
    };
  return (
    <div className="App">
    <h1> Hi i am react app</h1>
    <p>This is working</p>
    <button  
    style={style}
    onClick={this.switchNameHandler.bind(this,'jgejeejgbegjtj')}>Switch</button>
  
    <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
       /> 
    
    <Person 
      name="Ujjawal" age="27"
click={this.switchNameHandler.bind(this,'vrhkyrwejwg')}
changed={this.nameChangeHandler}
      />
    
    <Person>Hello Mr Dude</Person>

    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
    </div>
  );
}
}
export default Passingmethodreference;
