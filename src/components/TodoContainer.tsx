import React, { useState, useCallback, useRef, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import TodoType from '../types/TodoType';
import TodoList from './TodoList';

export default function TodoContainer() {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [id, setId] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const hasTodos = localStorage.getItem('list');
    if (hasTodos) {
      setTodos(JSON.parse(hasTodos));
      setId(JSON.parse(hasTodos)[0].id + 1);
    }
  }, [setTodos, setId]);

  const handleAdd = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (text.length === 0) return;
      const todo: TodoType = { id: id, content: text };
      const list = [todo, ...todos];

      if (inputRef.current) inputRef.current.focus();

      localStorage.setItem('list', JSON.stringify(list));
      setTodos(list);
      setText('');
      setId(id + 1);
    },
    [text, id, todos, setText, setId, setTodos],
  );

  const handleRemove = useCallback(
    (id: number) => {
      const list = todos.filter((item) => item.id !== id);
      localStorage.setItem('list', JSON.stringify(list));
      setTodos(list);
    },
    [todos, setTodos],
  );

  return (
    <div className="container">
      <h1>What do you have to do today?</h1>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          placeholder="Add todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <button type="submit">
          <FiPlus size={41} color="#F4F9E9" />
        </button>
      </form>
      <TodoList todos={todos} remove={handleRemove} />
    </div>
  );
}
