import React from 'react';
import TodoModification from '../types/TodoModification';
import Todo from './Todo';

export default function TodoList(props: TodoModification) {
  return (
    <ul>
      {props.todos?.length === 0 ? (
        <></>
      ) : (
        props.todos?.map((item) => (
          <Todo
            id={item.id}
            content={item.content}
            key={item.id}
            remove={props.remove}
          />
        ))
      )}
    </ul>
  );
}
