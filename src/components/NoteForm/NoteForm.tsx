import { useState } from 'react';
import css from './NoteForm.module.css';
import type { VoteType } from '../../types/votes';

type NoteFormProps = {
  onVote: (type: VoteType) => void;
};

export default function NoteForm({ onVote }: NoteFormProps) {
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;
    console.log('New note:', note);
    setNote('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={note}
        onChange={e => setNote(e.target.value)}
        placeholder="Write a note..."
      />
      <div className={css.buttonGroup}>
        <button type="submit" className={css.button}>Add Note</button>
        <button type="button" className={css.button} onClick={() => onVote('coffee')}>Vote Coffee</button>
        <button type="button" className={css.button} onClick={() => onVote('tea')}>Vote Tea</button>
        <button type="button" className={css.button} onClick={() => onVote('cake')}>Vote Juice</button>
      </div>
    </form>
  );
}
