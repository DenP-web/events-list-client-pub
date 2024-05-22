import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../ui/Button/Button";

import { setPage, setSortBy } from "../../store/slice/EventSlice";

import styles from "./EventsSort.module.css";

const EventsSort = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(({ events }) => events);

  const buttons = [
    { key: "title", title: "Title" },
    { key: "date", title: "Event date" },
    { key: "organizer", title: "Organizer" },
  ];

  const handleButtonClick = (key) => {
    if (sortBy === key) return;
    dispatch(setSortBy(key));
    dispatch(setPage(1));
  };

  return (
    <div className={styles.box}>
      <h3>Sort by:</h3>
      <ul className={styles.list}>
        {buttons.map((button) => (
          <li key={button.title} className={styles.item}>
            <Button
              title={button.title}
              active={button.key === sortBy}
              onClick={() => handleButtonClick(button.key)}
            />
          </li>
        ))}
      </ul>
      {sortBy !== "" && (
        <button className={styles.reset} onClick={() => handleButtonClick("")}>
          x
        </button>
      )}
    </div>
  );
};

export default EventsSort;
