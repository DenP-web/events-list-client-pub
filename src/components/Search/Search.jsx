import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { searchParticipants } from "../../store/slice/ParticipantsSlice";

import styles from "./Search.module.css";

const Search = ({show}) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email: '',
    fullName: '',
  })

  const changeHandler = ({target: {value, name}}) => {
    setValues((prev) => ({...prev, [name]: value}))
  }

  useEffect(() => {
    dispatch(searchParticipants({...values, id}))
  }, [values, dispatch, id])

  return (
    show && <div className={styles.search}>
      <h3 className={styles.title}>Search by</h3>
      <input
        type="text"
        name="email"
        className='input'
        placeholder="Email"
        value={values.email}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="fullName"
        className='input'
        placeholder="Full Name"
        value={values.fullName}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
