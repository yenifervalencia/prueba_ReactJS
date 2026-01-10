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
        className="px-3 w-full max-w-md rounded h-9 border border-gray-300 rounded-md
        outline-none focus:ring-1"
      />
    </div>
  );
};
