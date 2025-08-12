import { useState } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
  };

  return (
    <form className={css.searchForm} onSubmit={handleSearch}>
      <input
        className={css.searchInput}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search notes..."
      />
      <button type="submit" className={css.searchButton}>Search</button>
    </form>
  );
}
