import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "./routes";
import { getEvents } from "../store/slice/EventSlice";

const AppRouter = () => {
  const router = createBrowserRouter(routes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents())
  }, [])

  return <RouterProvider router={router} />;
};

export default AppRouter;
