import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        newNoteContent: '',
      };
      // Must explicitly bind the handleUserInput or will return error due to being undefined!
      this.handleUserInput = this.handleUserInput.bind(this);
      this.writeNote = this.writeNote.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box.
  handleUserInput(e){
    console.log(this);
    this.setState({
      newNoteContent: e.target.value,  // Value of the Text Input
    })
  }

  writeNote(){
    // Call a method that sets the noteContent for a note to
    // the value of the input.
    this.props.addNote(this.state.newNoteContent);

    // Set newNoteContent back to an emptry string.
    this.setState({
      newNoteContent: '',
    })

  }

  render() {
      return(
        <div className="formWrapper">
            <input className="noteInput"
            placeholder="Write a new note..."
            value={this.state.newNoteContent}
            onChange={this.handleUserInput} />
            <button className="noteButton"
            onClick={this.writeNote}>Add Note</button>
        </div>
      )
  }
}

export default NoteForm;
