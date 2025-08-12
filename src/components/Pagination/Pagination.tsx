import css from './Pagination.module.css';

export default function Pagination() {
  return (
    <div className={css.pagination}>
      <button className={css.pageButton}>Prev</button>
      <button className={css.pageButton}>1</button>
      <button className={css.pageButton}>2</button>
      <button className={css.pageButton}>Next</button>
    </div>
  );
}
