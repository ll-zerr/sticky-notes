import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepNote = (note) => note.doesMatchSearch === true;
  const filteredNotes = props.notes.filter(keepNote);
  const renderNote = (note) => (
    <Note
      onType={props.onType}
      note={note}
      key={note.id}
      removeNote={props.removeNote}
    />
  );
  const noteElements = filteredNotes.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
