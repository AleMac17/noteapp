import React, { useState } from "react";
import { useNotesContext } from "../../context";

import { RiInboxArchiveFill } from "react-icons/ri";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

export const Card = ({ card, index, isArchived }) => {
  const {
    deleteNote,
    updateNote,
    updateArchiveNote,
    addNote,
    notes,
    categories,
  } = useNotesContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(card.title);
  const [editedText, setEditedText] = useState(card.text);
  const [modalCategoryId, setModalCategoryId] = useState(card.category_id);

  const handleDeleteClick = () => {
    deleteNote(card.id);
  };

  const handleArchiveClick = () => {
    updateArchiveNote(card.id, { isArchived: !card.isArchived });
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(card.title);
    setEditedText(card.text);
  };

  const handleEditNote = () => {
    const updatedData = {
      title: editedTitle,
      text: editedText,
      isArchived: card.isArchived,
      category_id: parseInt(modalCategoryId),
    };

    try {
      updateNote(card.id, updatedData);
      setIsEditing(false);
      console.log("Updated state:", notes);
    } catch (error) {
      console.error("Error updating the note:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title: editedTitle, text: editedText };

    if (isEditing) {
      handleEditNote();
    } else {
      addNote(newNote);
    }
  };

  const handleCategoryChangeModal = (e) => {
    console.log(e.target.value);
    setModalCategoryId(e.target.value);
  };
  return (
    <>
      <div
        className={`card w-96 min-h-64 ${
          isArchived ? "bg-accent" : "bg-primary"
        } text-primary-content hover:scale-105 hover:ease-in ease-out transition-all duration-200`}
        key={index}
      >
        <div className="card-body gap-0">
          {!isEditing ? (
            <>
              <h2 className="card-title">{card.title}</h2>
              <div
                className={`divider ${
                  isArchived ? "divider-primary" : "divider-accent"
                }`}
              ></div>
              <p className=" whitespace-pre-line break-words">{card.text}</p>
            </>
          ) : (
            <>
              <input
                className="bg-white rounded-lg"
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <div className="divider divider-accent"></div>
              <textarea
                className="bg-white rounded-lg "
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              ></textarea>
              <select
                className="select self-center my-10 select-bordered"
                value={modalCategoryId}
                onChange={handleCategoryChangeModal}
              >
                <option value={card.category_id}>
                  {categories.find((cat) => cat.id === card.category_id).name}
                </option>
                {categories
                  .filter((cat) => cat.id !== card.category_id)
                  .map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </>
          )}
          <div className="card-actions justify-end">
            {!isEditing ? (
              <button
                className={`btn ${
                  isArchived ? "btn-primary" : "btn-accent"
                } btn-circle hover:text-success hover:scale-110 text-white`}
                onClick={handleEditClick}
              >
                <FaPen />
              </button>
            ) : (
              <>
                <button className="btn hover:bg-success" onClick={handleSubmit}>
                  Save
                </button>
                <button
                  className="btn hover:bg-error"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </>
            )}
            <button
              className={`btn ${
                isArchived ? "btn-primary" : "btn-accent"
              } btn-circle hover:scale-110 hover:text-gray-600 text-white`}
              onClick={handleArchiveClick}
            >
              {card.isArchived ? (
                <RiInboxUnarchiveFill />
              ) : (
                <RiInboxArchiveFill />
              )}
            </button>
            <button
              className={`btn ${
                isArchived ? "btn-primary" : "btn-accent"
              } btn-circle hover:text-error hover:scale-110 text-white`}
              onClick={handleDeleteClick}
            >
              <FaTrashCan />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
