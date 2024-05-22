import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../store/slice/EventSlice";

import Button from "../ui/Button/Button";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const events = useSelector(({ events }) => events);
  const pagesCount = Math.ceil(events.totalCount / events.limit);
  const pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const changePageHandler = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className={styles.box}>
      {events.page > 1 && (
        <Button
          onClick={() => changePageHandler(events.page - 1)}
          title={"<"}
        />
      )}
      {pages.map((page) => (
        <Button
          key={page}
          active={events.page === page}
          onClick={() => changePageHandler(page)}
          title={page}
        />
      ))}
      {events.page < pagesCount && (
        <Button
          onClick={() => changePageHandler(events.page + 1)}
          title={">"}
        />
      )}
    </div>
  );
};

export default Pagination;
