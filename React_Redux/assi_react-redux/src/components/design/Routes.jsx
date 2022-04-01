import { NavBar } from "./navBar";
import { Home } from "./Home";
import { Todo } from "./Todo";
import { Routes, Route, Link } from "react-router-dom";

export const Routers = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </>
  );
};
