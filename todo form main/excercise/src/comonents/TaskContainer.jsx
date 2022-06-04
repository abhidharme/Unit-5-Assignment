
import React from 'react';
import styledComponents from 'styled-components';
import { TaskItem } from './TaskItem';


const Wrapper = styledComponents.div` 
`;

const Headinggrep = styledComponents.p`
  text-align: center;
  background: lightgray;
  padding: 20px;
  font-size: 22px;
`


export const TaskContainer = ({tasks}) => {
  return (
    <Wrapper>
        <Headinggrep>TODO</Headinggrep>
        {
            tasks.map((task)=>( 
                <TaskItem key={task.id} {...task} />
            ) )
        }
    </Wrapper>
  )
}
