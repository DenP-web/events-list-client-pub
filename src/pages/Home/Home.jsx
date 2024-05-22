import React from "react";
import { useSelector } from "react-redux";

import EventCard from "../../components/EventCard/EventCard";
import EventsSort from "../../components/EventsSort/EventsSort";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

import styles from "./Home.module.css";


const Home = () => {
  const { list, isLoading } = useSelector(({ events }) => events);

  return (
    <div className="wrapper">
      <header>
        <h1 className="title">Events</h1>
      </header>
      <main>
        <section>
          <EventsSort />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <ul className={styles.list}>
                {list.map((item) => (
                  <li key={item._id} className={styles.item}>
                    <EventCard {...item} />
                  </li>
                ))}
              </ul>
              <Pagination />
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
