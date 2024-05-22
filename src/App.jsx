import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./router/AppRouter";
import { getEvents } from "./store/slice/EventSlice";
import { useEffect } from "react";

function App() {
  const { sortBy, page } = useSelector(({ events }) => events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents({ sortBy, page }));
  }, [sortBy, page]);

  return <AppRouter />;
}

export default App;
