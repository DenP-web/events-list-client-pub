import React from "react";
import { Link } from "react-router-dom";

import { PARTICIPANTS_URL, REGISTER_URL } from "../../utils/consts";

import styles from "./EventCard.module.css";

const EventCard = ({ title, description, eventDate, organizer, _id }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.text}>
        <p>{description}</p>
      </div>
      <span>
        Date: <span className={styles.bold}>{eventDate}</span>
      </span>
      <span className={styles.block}>
        Organizer: <span className={styles.bold}>{organizer}</span>
      </span>
      <div className={styles.box}>
        <Link className={styles.link} to={REGISTER_URL + "/" + _id}>
          Register
        </Link>
        <Link className={styles.link} to={PARTICIPANTS_URL + "/" + _id}>
          Views
        </Link>
      </div>
    </article>
  );
};

export default EventCard;
