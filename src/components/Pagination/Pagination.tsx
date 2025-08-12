import React from "react";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage = 1,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={Math.max(0, currentPage - 1)}
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