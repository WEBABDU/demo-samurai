import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  currentPage,
  onPageChanged,
  totalItemsCount,
  pageSize,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pageNumberStyles}>
      {portionNumber > 1 && (
        <button
          className={s.pagesButton}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, index) => {
          return (
            <span
              key={index}
              className={
                currentPage === p ? s.selectedPage : null + " " + s.pagesStyle
              }
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={s.pagesButton}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
