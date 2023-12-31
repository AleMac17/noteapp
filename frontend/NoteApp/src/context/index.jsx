import React, { createContext, useContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(true);
  const [errorNotes, setErrorNotes] = useState(null);

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        setErrorNotes(error.message);
      } finally {
        setLoadingNotes(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setErrorCategories(error.message);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchNotes();
    fetchCategories();
  }, []);

  const addNote = async (newNote) => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        throw new Error("Failed to add a new note");
      }

      const addedNote = await response.json();

      setNotes((prevNotes) => [...prevNotes, addedNote]);
    } catch (error) {
      console.error("Error adding a new note:", error.message);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${noteId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the note");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error("Error deleting the note:", error.message);
    }
  };

  const updateNote = async (noteId, updates) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error("Failed to update the note");
      }

      const updatedNote = await response.json();

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, ...updatedNote } : note,
        ),
      );
      console.log(notes);

      console.log(updatedNote);
      return updatedNote;
    } catch (error) {
      console.error("Error updating the note:", error.message);
      throw error;
    }
  };

  const addCategory = async (newCategory) => {
    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      if (!response.ok) {
        throw new Error("Failed to add a new category");
      }

      const addedCategory = await response.json();
      setCategories((prevCategories) => [...prevCategories, addedCategory]);
    } catch (error) {
      console.error("Error adding a new category:", error.message);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/categories/${categoryId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete the category");
      }

      const deletedCategory = await response.json();

      const updatedResponse = await fetch(
        "http://localhost:3000/api/categories",
      );
      const updatedCategories = await updatedResponse.json();

      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error deleting the category:", error.message);
    }
  };
  const updateArchiveNote = async (noteId, updates) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/${noteId}/archive`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updates),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update the note");
      }

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteId ? { ...note, ...updates } : note,
        ),
      );
    } catch (error) {
      console.error("Error updating the note:", error.message);
    }
  };

  const contextValue = {
    notes,
    loadingNotes,
    errorNotes,
    addNote,
    deleteNote,
    updateNote,
    categories,
    loadingCategories,
    errorCategories,
    addCategory,
    deleteCategory,
    updateArchiveNote,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NotesContext);
};
