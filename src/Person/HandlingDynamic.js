import React,{Component} from 'react';
import Person from './Person'
class HandlingDynamic extends Component {
  state={
    persons:[
    {name:"ujjawal",age:22},
    {name:"aman",age:16}
    ],
    otherState:'some other value',
    showPersons:false
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
togglePersonsHandler=()=>{
  const doesShow=this.state.showPersons;
  this.setState({showPersons:!doesShow});
}

  render() {
    const style={
      backgroundCColor:'white',
      font: 'inherit',
      border:'1x solid blue',
      padiing:'8px',
      curson:'pointer'
    };
    let persons=null;
    if(this.state.showPersons){
      persons=(
          <div>

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
          )
    }
return (
          <div className="App">
          <h1> Hi i am react app</h1>
          <p>This is working</p>
          <button  
          style={style}
          onClick={this.togglePersonsHandler}>Switch</button>
          {persons}
        </div>
  ); 
  }
}
export default HandlingDynamic;