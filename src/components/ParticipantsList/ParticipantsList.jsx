import React from "react";
import { Link, useParams } from "react-router-dom";

import ParticipantsCard from "../ParticipantsCard/ParticipantsCard";

import { REGISTER_URL } from "../../utils/consts";

import styles from "./ParticipantsList.module.css";

const ParticipantsList = ({ list, totalCount }) => {
  const { id } = useParams();
  return (
    <>
      {totalCount > 0 ? (
        <ul className={styles.list}>
          {list.length === 0
            ? 'Unfortunately, nothing was found'
            : list.map((participant) => (
                <li key={participant._id}>
                  <ParticipantsCard {...participant} />
                </li>
              ))}
        </ul>
      ) : (
        <>
          <span> Unfortunately, the list is empty. Be the first! </span>
          <Link className={styles.link} to={REGISTER_URL + "/" + id}>
            Register
          </Link>
        </>
      )}
    </>
  );
};

export default ParticipantsList;
