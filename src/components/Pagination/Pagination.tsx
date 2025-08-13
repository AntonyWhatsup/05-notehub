import React from "react";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 0,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      forcePage={Math.max(0, currentPage)}
      containerClassName={css.pagination}
      pageClassName={css.page}
      breakClassName={css.break}
      previousClassName={css.prev}
      nextClassName={css.next}
      activeClassName={css.active}
      disabledClassName={css.disabled}
    />
  );
};

export default Pagination;
