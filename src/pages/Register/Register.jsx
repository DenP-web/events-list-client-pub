import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HOME_URL } from "../../utils/consts";

import { registerParticipants } from "../../store/slice/ParticipantsSlice";

import styles from "./Register.module.css";

import Button from "../../components/ui/Button/Button";

const Register = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { validErr } = useSelector(({ participants }) => participants);
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    dateOfBirth: "",
    hearAbout: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerParticipants({ values, id, navigate }));
  };

  return (
    <div className="wrapper">
      <header>
        <Link className='back' to={HOME_URL}>
          {"< Back"}
        </Link>
        <h1 className="title">Register</h1>
      </header>
      <main>
        <section className={styles.register}>
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className={styles.group}>
              <input
                className="input"
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <span className={styles.msg}>{validErr.fullName}</span>
            </div>
            <div className={styles.group}>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <span className={styles.msg}>{validErr.email}</span>
            </div>
            <h3 className={styles.subtitle}>Date of Birth</h3>
            <div className={styles.group}>
              <input
                className="input"
                type="date"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
              />
              <span className={styles.msg}>{validErr.dateOfBirth}</span>
            </div>
            <h3 className={styles.subtitle}>
              Where did you hear about this event?
            </h3>
            <div className={styles.group}>
              <label className={styles.label}>
                <input
                  className={styles.radio}
                  type="radio"
                  name="hearAbout"
                  value="Friends"
                  checked={values.hearAbout === "Friends"}
                  onChange={handleChange}
                />
                <span>Friends</span>
              </label>
              <label className={styles.label}>
                <input
                  className={styles.radio}
                  type="radio"
                  name="hearAbout"
                  value="Found myself"
                  checked={values.hearAbout === "Found myself"}
                  onChange={handleChange}
                />
                <span>Found myself</span>
              </label>
              <label className={styles.label}>
                <input
                  className={styles.radio}
                  type="radio"
                  name="hearAbout"
                  value="Social media"
                  checked={values.hearAbout === "Social media"}
                  onChange={handleChange}
                />
                <span>Social media</span>
              </label>
              <span className={styles.msg}>{validErr.hearAbout}</span>
            </div>
            <Button title={"Register"} type={"submit"} />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Register;
