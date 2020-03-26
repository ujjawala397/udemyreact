import React,{Component} from 'react';
class L5_3 extends Component{
	state={
			persons:[
				 {id:'1',name:'rahul',age:12},
				 {id:'2',name:'mehul',age:13}	
			]
		}
	
	switch=(event)=>{
		this.setState({
			persons:[
				{id:'1',name:event.target.value},
				{id:'2',name:event.target.value}
			]
		})
	}

	render(){
		let persons=null;
		const style={
			backgroundColor:'orange',
			color:'red',
			fontSize:'100px'
		};
		return(
			<div>
				<input type="text" onChange={this.switch}/>
					<p style={style}>Hello {this.state.persons[0].name}</p>
					<p style={style}>Hello {this.state.persons[1].name}</p>
			</div>
			)
	}
}
export default L5_3;