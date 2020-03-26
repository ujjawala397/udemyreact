import React,{Component} from 'react';
import Radium from 'radium';
class L5_6 extends Component{
	render(){
		let style={
			backgroundColor:'orange',
			fontSize:'100px',
			width:'200px',
			'@media(min-width:500px)':{
				width:'450px'
			}
		};

//ADD styleroot in parent file 


		return(
				<div>
					<p style={style}>hello sir</p>
				</div>
	
			)
	}
};
export default Radium(L5_6);