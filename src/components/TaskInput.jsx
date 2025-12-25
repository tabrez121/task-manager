

import React, { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext";

const TaskInput = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const value = text.trim();
      if (!value) return;
      addTask(value);
      setText("");
    },
    [text, addTask]
  );

  const isDisabled = text.trim().length === 0;

  return (
    <form className="task-input" onSubmit={handleSubmit} aria-label="Add task form">
      <input
        className="task-input-field"
        value={text}
        onChange={handleChange}
        placeholder="Add a new task..."
        aria-label="Task text"
      />
      <button className="btn add" type="submit" disabled={isDisabled}>
        Add
      </button>
    </form>
  );
};

export default React.memo(TaskInput);
