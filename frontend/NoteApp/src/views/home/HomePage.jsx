import React, { useState, useEffect } from 'react';
import { useNotesContext } from '../../context';
import { NoteList } from '../../components/note-list';
import { FaPlus } from 'react-icons/fa';
const HomePage = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [triedToAddWithoutCategory, setTriedToAddWithoutCategory] =
    useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [modalCategoryId, setModalCategoryId] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const {
    notes,
    categories,
    loadingNotes,
    loadingCategories,
    addNote,
    addCategory,
    deleteCategory,
  } = useNotesContext();

  const handleCloseModal = () => {
    setTitle('');
    setText('');
    setModalCategoryId('');
    setSelectedCategoryId('');
    setNewCategory('');
    document.getElementById('add_modal').close();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  const handleCategoryChangeModal = (e) => {
    setModalCategoryId(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!modalCategoryId) {
      setTriedToAddWithoutCategory(true);
      console.error('Please select a category.');
      return;
    }

    if (title || text) {
      const newNote = {
        title,
        text,
        IsArchived: 0,
        category_Id: parseInt(modalCategoryId),
      };
      addNote(newNote);
      setSelectedCategoryId(selectedCategoryId);
    }
    setTriedToAddWithoutCategory(false);
    handleCloseModal();
  };

  const handleCategoryDelete = () => {
    if (selectedCategoryId) {
      deleteCategory(selectedCategoryId);
      setSelectedCategoryId('');
    }
  };

  const handleCategoryAdd = () => {
    document.getElementById('addCategoryModal').showModal();
  };
  const handleAddCategorySubmit = (e) => {
    e.preventDefault();
    if (
      newCategory &&
      !categories.some((cat) => cat.name === newCategory)
    ) {
      addCategory({ name: newCategory });
    }
    setNewCategory('');
    document.getElementById('addCategoryModal').close();
  };

  useEffect(() => {
    const newFilteredNotes = selectedCategoryId.trim()
      ? notes.filter(
          (note) =>
            (String(note.category_id) === selectedCategoryId.trim() ||
              (note.category_id === null &&
                selectedCategoryId.trim() === '')) &&
            !note.isArchived
        )
      : notes.filter((note) => !note.isArchived);

    console.log('Filtered Notes:', newFilteredNotes);
    setFilteredNotes(newFilteredNotes);
  }, [selectedCategoryId, notes, categories]);
  return (
    <div className=' w-full h-full flex flex-col gap-10 mt-10'>
      <dialog id='addCategoryModal' className='modal'>
        <div className='modal-box bg-primary'>
          <form
            className='flex flex-col p-8'
            onSubmit={handleAddCategorySubmit}
          >
            <input
              type='text'
              placeholder='New Category'
              className='input rounded-none input-bordered text-white bg-inherit border-none'
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button
              className='btn btn-accent text-white text-lg self-center mt-10 h-auto w-48 hover:btn-primary hover:border-accent hover:border-4 hover:text-white '
              onClick={handleCategoryAdd}
            >
              Add Category
            </button>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
      <div className='flex justify-center gap-10  items-center'>
        <select
          className='select text-black items-center select-bordered w-full max-w-xs pr-20'
          value={selectedCategoryId}
          onChange={handleCategoryChange}
        >
          <option value=''>All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          className='btn btn-sm h-full hover:bg-secondary'
          onClick={handleCategoryAdd}
        >
          + Add Category
        </button>
        <button
          className='btn btn-sm h-full hover:bg-error'
          onClick={handleCategoryDelete}
        >
          - Delete Category
        </button>
      </div>

      <NoteList
        loadingNotes={loadingNotes}
        loadingCategories={loadingCategories}
        filteredNotes={filteredNotes}
        categories={categories}
        handleCategoryAdd={handleCategoryAdd}
        handleCategoryDelete={handleCategoryDelete}
        isArchived={false}
      />

      <button
        className='btn btn-circle text-2xl self-end fixed bottom-24 right-24 btn-accent text-white hover:animate-[spin_3s_linear_infinite]'
        onClick={() => document.getElementById('add_modal').showModal()}
      >
        <FaPlus />
      </button>

      <dialog id='add_modal' className='modal'>
        <div className='modal-box bg-primary'>
          <form
            onSubmit={handleFormSubmit}
            className='flex flex-col items-stretch'
          >
            <input
              type='text'
              placeholder='Title'
              className='input rounded-none input-bordered animate-pulse focus:animate-none text-white bg-inherit border-none'
              value={title}
              onChange={handleTitleChange}
            />
            <div className='divider  divider-accent'></div>
            <textarea
              className='textarea rounded-none textarea-bordered animate-pulse focus:animate-none text-white bg-inherit border-none h-80'
              placeholder='Write your text'
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <select
              className={`input self-center input-bordered ${
                triedToAddWithoutCategory && !modalCategoryId
                  ? 'bg-error'
                  : ''
              } bg-accent`}
              value={modalCategoryId}
              onChange={handleCategoryChangeModal}
            >
              <option value=''>Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <button
              type='submit'
              className='btn btn-accent text-white text-lg self-center mt-10 h-auto w-48 hover:btn-primary hover:border-accent hover:border-4 hover:text-white  '
            >
              Add
            </button>
          </form>
          <p className='py-4'>
            Press ESC key or click on ✕ button to close
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default HomePage;
