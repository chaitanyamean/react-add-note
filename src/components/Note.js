import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';


class Note extends React.Component {

	state = {
		name: ''
	} 


	componentDidMount() {
		this.setState({name: this.props.name})
		console.log(this.state.name);
	}


	handleChange = e => {
			console.log('dd');	
		this.setState({name: e.target.value})

	}

	blurData = () => {
		console.log(this.state);
		this.props.editNote(this.state.name, this.props.place)
	}


	render(){

		// const {name, place, editNode} = this.props;

		return(
			<div className="note-cls">
				<input 
				value={this.state.name}
				onChange={this.handleChange}
				onBlur= {this.blurData}
				/>
				{/* <button>Edit</button> */}
				<GrEdit className="edit-cls"/>
				<RiDeleteBin6Line onClick={() => this.props.deleteNote(this.props.place)} />
				{/* <button > Delete </button> */}

			</div>
		);
	}
}
export default Note;