import React,{Component} from 'react';
import Assign from './Assign';
import Char from './Char/Char';
class Assignment extends Component{

state={
	userInput:''
}

inputChangeHandler=(event)=>{
	this.setState({userInput:event.target.value});
}

deleteCharHandler=(index)=>{
	const text=this.state.userInput.split('');
	text.splice(index,1);
	const updatedText=text.join('');
	this.setState({userInput:updatedText});
}
	render(){
		let charList=this.state.userInput.split('').map((ch,index)=>{
			return <Char 
			character={ch} 
			key={index}
			clicked={()=>this.deleteCharHandler(index)}/>
		})
		return(
			<div>
				<input
					type="text" 
					onChange={this.inputChangeHandler} 
					value={this.state.userInput}/>
					<p>{this.state.userInput}</p>
					<Assign inputLength={this.state.userInput.length}/>
					{charList}
			</div>
			)
	}
}
export default Assignment;