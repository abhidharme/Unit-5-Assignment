import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Todo/action.js";
import { Input } from "./input";
import { Table } from "./table";
import { Navigate } from "react-router-dom";
import { LoginPage } from "./Login";

export const HomePage = () => {
  const { isLogged } = useSelector((store) => store.auth);
  console.log(isLogged);

  if (!isLogged) {
    return <Navigate to={"/login/"} />;
  }

  return (
    <>
      <div className="home">
        <Input></Input>
        <Table></Table>
      </div>
    </>
  );
};
