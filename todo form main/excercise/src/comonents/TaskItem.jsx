import React from 'react';
import styledComponents from 'styled-components';
import { getTodosData } from '../Redux/Todos/action';

const TaskItemGrap = styledComponents.div`
margin:10px;
padding: 5px;
border: 1px solid black;
font-size: 14px;

`

const HeadSection = styledComponents.div`
display:flex;
align-items: center;
justify-content: space-between;
`

const SubtaskSection = styledComponents.div`
`;

export const TaskItem = (prop) => {

    const { title , description , subtasks , status , tags , date , id } = prop;
    const {personal , official , others} = tags;
    console.log(subtasks)
  return (
    <TaskItemGrap>
        <HeadSection>
            <div>
              <p>{title}</p>
              <p>{personal && "PERSONAL"} {official && "OFFICIAL"}  {others && "OTHERS"}</p>
              <p>{description}</p>
            </div>
            <div>{date}</div>
        </HeadSection>
        <SubtaskSection>
          {/* {
            subtasks.map((subtask)=> 
            <div key={subtask.id}>
              <label>
                <input type="checkbox"   
                 checked={subtask.subtaskStatus} 
                 onChange={(e)=>{
                   const subtaskAfterToggle = subtasks.map(
                     (item)=> item.id === subtask.id
                   )
                   ? {...subtask , subtaskStatus: e.target.checked}
                   : item;
                   const payload = {
                     title,
                     description,
                     date,
                     tags,
                     subtasks: subtaskAfterToggle,
                     status
                   }
                   fetch(`http://localhost:8080/todos/${id}` , {
                     method: "PUT",
                     body: JSON.stringify(payload),
                     headers:{
                       "Content-Typr" : "application/json"
                     }
                   }).then(()=> dispatchEvent(getTodosData()));
                 }}
                />
                {subtasks}
              </label>
            </div>
            )
          } */}
        </SubtaskSection>
    </TaskItemGrap> 
  )
}
