import React,{Component} from 'react';
import Person from './Person'
import Radium, {StyleRoot} from 'radium';
import App from './../App.css';

class L5_1 extends Component {
  
  state={
    persons:[
    {id:'1',name:"ujjawal",age:22},
    {id:'2',name:"aman",age:16}
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

  nameChangeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;

    });

    const person={
      ...this.state.persons[personIndex]
    };

   // const person=Object.assign({},this.state.persons[personIndex])

    person.name=event.target.value;

    const persons=[...this.state.persons];

    persons[personIndex]=person;

    this.setState({persons:persons})
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
      backgroundColor:'green',
      color:'white',
      font: 'inherit',
      border:'1x solid blue',
      padiing:'8px',
      curson:'pointer',
     
    };
    let persons=null;
    if(this.state.showPersons){
      persons=(
          <div>
          {this.state.persons.map((person,index)=>{
            return <Person
            click={()=>this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event)=>this.nameChangeHandler(event,person.id)}/>
          })}
          </div>
          );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
let classes=[];
    classes.push('orange');//Classes=['red']
    

return(
    <StyleRoot>
          <div className="App">
          <h1> Hi i am react app</h1>
          <p className={classes}>This is working</p>
          <button  
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
  ); 
  }
}
export default Radium(L5_1);