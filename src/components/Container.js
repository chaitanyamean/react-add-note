import React from 'react';
import AddNotes from './AddNotes';
import Note from './Note';

class Container extends React.Component {
	state={
		notes:[]
	}
	addNote = note => {
		console.log("note", note);
		this.setState(prevstate => { //second way to update state
			let a = [...prevstate.notes]; //shallow copy of ur state
			a.push(note); // pushing new object into ur duplicate array
			return{       //doing state update
				notes: a  //syntax for updating state
			};
		});
		// console.log(this.state);
	}

	editNote = (name, place) => {
			console.log(name, place)
			const tempState = this.state;
			const tempNote = this.state.notes[place];
			console.log(tempNote)
			if(name !== "" && tempNote.name !== name) {
				tempNote.name = name;
				tempState.notes[place]=tempNote;
				this.setState({notes: tempState.notes});
			}
	}


	deleteNote = (place) => {
		console.log(place)
		const tempState = [...this.state.notes];
		console.log(tempState);
		tempState.splice(place,1);
		this.setState({notes: tempState})
	}
	
 	render() {
 		 console.log("State", this.state);
 		return(
 			<div className="parent_container">
 				<h1>Note Maker</h1>
 				<AddNotes addNote = {this.addNote}/>
 				<div className="notes_container">
 					{
 						this.state.notes.map(
 							(note, place)=> 
 							(<Note
 								key = {place}
 								name = {note.name}
								 place = {place}
								 editNote = {this.editNote}
								 deleteNote = {this.deleteNote}
 							/>
 							)
 						)
 					}
 				</div>
 			</div>
 		);
 	}
}

export default Container;