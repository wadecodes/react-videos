import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="videoSearch">Search Videos</label>
          <input
            type="text"
            id="videoSearch"
            onChange={(e) => setTerm(e.target.value)}
            placeholder="What are you looking for?"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
