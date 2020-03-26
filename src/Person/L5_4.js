import React, {Component} from 'react';
import Person from './Person.css'; 
class L5_4 extends Component{
	render(){

		// let classes=['red'].join('');

		let classes=[];
		classes.push('orange');//Classes=['red']
		//   classes.push('red');//Classes=['red','bold']
		return(
			<div>
				<p className={classes}>This is working </p>
			</div>
		)
	}
}
export default L5_4;