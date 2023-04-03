import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  onSearch = (e) => {
    const searchInput = e.target.value;
    const lowerCaseSearchInput = searchInput.toLowerCase();
    this.setState({ searchText: searchInput });
    // console.log(lowerCaseSearchInput);

    const searchedNotes = this.state.notes.map((note) => {
      if (!lowerCaseSearchInput) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const lowerCaseTitle = note.title.toLowerCase();
        const lowerCaseDescription = note.description.toLowerCase();
        if (lowerCaseTitle.includes(lowerCaseSearchInput)) {
          note.doesMatchSearch = true;
        } else if (lowerCaseDescription.includes(lowerCaseSearchInput)) {
          note.doesMatchSearch = true;
        } else {
          note.doesMatchSearch = false;
        }
        return note;
      }
    });
    this.setState({ notes: searchedNotes });
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };

    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  removeNote = (clickedId) => {
    const filterNotes = (note) => note.id !== clickedId;
    const newNotes = this.state.notes.filter(filterNotes);
    this.setState({ notes: newNotes });
  };

  componentDidMount() {
    const savedNotesString = localStorage.getItem("savedNotes");
    if (savedNotesString) {
      const savedNotes = JSON.parse(savedNotesString);
      this.setState({ notes: savedNotes });
    }
  }

  componentDidUpdate() {
    const savedNotesString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", savedNotesString);
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
        />
        <NotesList
          onType={this.onType}
          notes={this.state.notes}
          removeNote={this.removeNote}
        />
      </div>
    );
  }
}

export default App;
