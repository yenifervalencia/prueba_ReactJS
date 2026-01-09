import React from 'react'
import './../index.css'

export const Search = ({ searchText, setSearchText }) => {
  return (
    <div className="flex justify-end w-full">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border p-2 w-full max-w-md rounded"
      />
    </div>
  );
};
