import css from './NoteList.module.css';
import type { Votes } from '../../types/votes';

type NoteListProps = {
  votes: Votes;
};

export default function NoteList({ votes }: NoteListProps) {
  return (
    <div className={css.list}>
      <h2>Votes</h2>
      <div>Coffee: {votes.coffee}</div>
      <div>Tea: {votes.tea}</div>
      <div>Juice: {votes.cake}</div>
    </div>
  );
}
