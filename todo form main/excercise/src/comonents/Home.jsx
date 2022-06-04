import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { store } from "../Redux/store";
import { getTodosData } from "../Redux/Todos/action";
import { Sidebar } from "./Sidebar";
import { TaskContainer } from "./TaskContainer";

const Container = styled.div`
      margin: 0;
      padding: 100px;
      display: grid;
      grid-template-columns: repeat(11, 1fr);
      height: 100vh;
      gap:2 0px
`;

const Griditem1 = styled.div`
grid-column: 1/3;
background:green;
`;

const Griditem2 = styled.div`
grid-column: 3/6;
background:red;
`;

const Griditem3 = styled.div`
grid-column: 6/9;
background:yellow;
`;

const Griditem4 = styled.div`
grid-column: 9/12;
background:blue;
`;

export const Home = ()=> {

const { token , username } = useSelector((state)=>state.login);
const { todos } = useSelector((state)=> state.todos);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getTodosData());
},[])
    return (
        <Container> 
            <Griditem1>
                <Sidebar token={token} username={username} todos={todos} />
            </Griditem1>
            <Griditem2>
                <TaskContainer tasks = {todos} />
            </Griditem2>
            <Griditem3>INPROGRESS</Griditem3>
            <Griditem4>DONE</Griditem4>
        </Container>
        
    )
}