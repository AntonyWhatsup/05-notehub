import { useState } from 'react';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';

import Modal from '../Modal/Modal';
import NoteForm  from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';
import Pagination from '../Pagination/Pagination';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    coffee: 0,
    tea: 0,
    cake: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>NoteHub</h1>
      <SearchBox />
      <NoteForm onVote={handleVote} />
      <NoteList votes={votes} />
      <Pagination />
      <Modal />
    </div>
  );
}
