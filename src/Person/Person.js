import React from 'react';
import './Person.css';
import Radium from 'radium';
// ---------------------------------------------------------------

const Person=(props)=>{
	
	const style={
		'@media(min-width:500px)':{
			width:'450px'
		}
	};
	return (
		<div className="Person" style={style}>
		<p onClick={props.click}>I m {props.name} and {props.age} years old</p>
		<p>{props.children}</p>
		<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		) 
};
export default Radium(Person);



// ---------------------------------------------------------
// function person(){
// 	return <p>I m person {Math.floor(Math.random()*1000)}years old</p>
// }
// export default person;


// ----------------------------------------------------------------

