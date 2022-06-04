import React from 'react'
import styled from 'styled-components'

const TagStateCard = styled.div`
  padding:25px;
  display:flex;
  flex-direction: column;
  align-item: center;

`

export const TagState = ({todos}) => {
  return (
    <TagStateCard>  
        <div>ALL - {todos.filter((item) => item.tags.personal && item.tags.official && item.tags.others).length}</div>
        <div>Personal - {todos.filter((item) => item.tags.personal).length}</div>
        <div>Official- {todos.filter((item) => item.tags.official).length}</div>
        <div>Others {todos.filter((item) => item.tags.others).length}</div>

    </TagStateCard>
  )
}
