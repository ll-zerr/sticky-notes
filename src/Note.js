import React from "react";

const Note = (props) => {
  const updateTitle = (event) => {
    const editMeId = props.note.id;
    const updatedValue = event.target.value;
    props.onType(editMeId, "title", updatedValue);
  };

  const updateDescription = (event) => {
    const editMeId = props.note.id;
    const updatedValue = event.target.value;
    props.onType(editMeId, "description", updatedValue);
  };

  const deleteById = () => {
    const id = props.note.id;
    props.removeNote(id);
  };

  return (
    <li className="note">
      {/* {console.log(props)} */}
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={deleteById}>
        X
      </span>
    </li>
  );
};

export default Note;
