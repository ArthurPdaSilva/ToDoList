import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import TodoModification from '../types/TodoModification';
import TodoType from '../types/TodoType';

export default function Todo(props: TodoModification & TodoType) {
  return (
    <li key={props.id}>
      <span>{props.content}</span>
      <FiXCircle color="white" onClick={() => props.remove(props.id)} />
    </li>
  );
}
