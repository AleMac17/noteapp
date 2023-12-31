import React from 'react';
import Card from '../card/index.jsx';

export const NoteList = ({
  loadingNotes,
  loadingCategories,
  filteredNotes,
  isArchived,
}) => {
  return (
    <>
      {!loadingNotes && !loadingCategories ? (
        filteredNotes.length > 0 ? (
          <ul className='flex flex-wrap justify-evenly gap-y-20'>
            {filteredNotes.map((note, index) => (
              <Card
                isArchived={isArchived}
                card={note}
                key={`${note.id}_${index}`}
              />
            ))}
          </ul>
        ) : (
          <p className='text-3xl text-error font-extrabold self-center mt-10 animate-pulse'>
            No notes available
          </p>
        )
      ) : (
        <span className='loading loading-spinner self-center mt-10 animate-pulse loading-lg text-info'></span>
      )}
    </>
  );
};

export default NoteList;
