import React,{Component} from 'react';
import Person from './Person'
class Listandstate extends Component {
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

  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
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
          {this.state.persons.map((person,index)=>{
            return <Person
            click={()=>this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age} />
          })}
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
export default Listandstate;