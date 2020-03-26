import React,{Component} from 'react';
import Radium from 'radium';
class L5_5 extends Component{

	render(){
		const style={
			
		};

		style[':hover']={
			backgroundColor:'lightgreen',
			color:'black'
		}
		return(
				<div>
					<button style={style}>Switch</button>
				</div>
			)
	}

}
export default Radium(L5_5);