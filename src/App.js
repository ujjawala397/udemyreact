//----------------------------------------------- rendering
import React from 'react';
import './App.css';
import L5_1 from './Person/L5_1';
function App(){
  return(
    <div>
      <L5_1/>
    </div>
    )
}
export default App;

// class App extends Component {
//   state={
//     persons:[
//     {name:"ujjawal",age:22},
//     {name:"aman",age:16}
//     ],
//     otherState:'some other value',
//     showPersons:false
//   }
//   switchNameHandler=(newName)=>{
//     // console.log('Was clicked');
//     this.setState({
//       persons:[
//       {name: newName,age:22},
//       {name:"awefhbweb",age:16}
//       ]
//   })
//   }
//   nameChangeHandler=(event)=>{
//    this.setState({
//       persons:[
//       {name: 'max',age:2321},
//       {name:event.target.value,age:16}
//       ]
//   }) 
//   }
// togglePersonsHandler=()=>{
//   const doesShow=this.state.showPersons;
//   this.setState({showPersons:!doesShow});
// }

//   render(){
//     const style={
//       backgroundCColor:'white',
//       font: 'inherit',
//       border:'1x solid blue',
//       padiing:'8px',
//       curson:'pointer'
//     };
//   return (
//     <div className="App">
//     <h1> Hi i am react app</h1>
//     <p>This is working</p>
//     <button  
//     style={style}
//     onClick={this.togglePersonsHandler}>Switch</button>
//     {this.state.showPersons===true?
//   <div>
//     <Person 
//       name={this.state.persons[0].name} 
//       age={this.state.persons[0].age}
//        /> 
    
//     <Person 
//       name="Ujjawal" age="27"
// click={this.switchNameHandler.bind(this,'vrhkyrwejwg')}
// changed={this.nameChangeHandler}
//       />
    
//     <Person>Hello Mr Dude</Person>

//     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//     </div>:null
//   }
//   </div>
//   );
// }
// }
// export default App;














//--------------------------Using hooks (using state without class... using state in function) ----------------------------------------------------------

// import React, {useState} from 'react';

// import './App.css';
// import Person from './Person/Person';
// const App = props=> {
//   const [personsState, setPersonsState]=useState({
//     persons:[
//     {name:"ujjawal" ,age:22},
//     {name:"aman",age:16}
//     ],
//     otherState:'some other value'
//   });

// const switchNameHandler=()=>{
//     // console.log('Was clicked');
//     setPersonsState({
//       persons:[
//       {name:"ufefenhkfal",age:22},
//       {name:"awefhbweb",age:16}
//       ]
//   });
// };

//   return (
//     <div className="App">
//     <h1> Hi i am react app</h1>
//     <p>This is working</p>
//     <button onClick={switchNameHandler}>Switch</button>
//     <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//     <Person name="Ujjawal" age="22"/>
//     <Person>Hello Mr Dude</Person>
//     <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//     </div>
//   );
// };
// export default App;



// States and props-----------------------------------

// App.js

// import React, {Component} from 'react';
// import './App.css';
// import Person from './Person/Person';
// class App extends Component {
//   state={
//     persons:[
//     {name:"ujjawal",age:22},
//     {name:"aman",age:16}
//     ],
//     otherState:'some other value'
//   }
//   switchNameHandler=()=>{
//     // console.log('Was clicked');
//     this.setState({
//       persons:[
//       {name:"ufefenhkfal",age:22},
//       {name:"awefhbweb",age:16}
//       ]
//   })
//   }
//   render(){
//   return (
//     <div className="App">
//     <h1> Hi i am react app</h1>
//     <p>This is working</p>
//     <button onClick={this.switchNameHandler}>Switch</button>
//     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//     <Person name="Ujjawal" age="22"/>
//     <Person>Hello Mr Dude</Person>
//     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//     </div>
//   );
// }
// }
// export default App;



//Person.js

// import React from 'react';
// const Person=(props)=>{
//   return (
//     <div>
//     <p>I m {props.name} and {props.age} years old</p>
//     <p>{props.children}</p>
//     </div>
//     )
// };
// export default Person;  
// ----------------------------------------------------------







//Person.js

// import React from 'react';
// const Person=(props)=>{
//   return (
//     <div>
//     <p>I m {props.name} and {props.age} years old</p>
//     <p>{props.children}</p>
//     </div>
//     )
// };
// export default Person;  
// -----------------------------------------------------------------------