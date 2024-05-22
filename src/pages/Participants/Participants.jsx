import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";
import Search from "../../components/Search/Search";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";
import RegistrationsChart from "../../components/RegistrationsChart/RegistrationsChart";

import { getParticipants } from "../../store/slice/ParticipantsSlice";

import { HOME_URL } from "../../utils/consts";


const Participants = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const { isLoading, list, totalCount } = useSelector(
    ({ participants }) => participants
  );
  const events = useSelector(({events}) => events)
  const title = (events.list.find(el => el._id === id))?.title

  useEffect(() => {
    dispatch(getParticipants(id))
  }, [id])

  return (
    <div className="wrapper">
      <header>
        <Link className='back' to={HOME_URL}>
          {"< Back"}
        </Link>
        <h1 className="title">{title} participants</h1>
        <RegistrationsChart eventId={id} show={!!totalCount} />
      </header>
      <main>
        <section>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Search show={!!totalCount} />
              <ParticipantsList list={list} totalCount={totalCount} />
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Participants;
