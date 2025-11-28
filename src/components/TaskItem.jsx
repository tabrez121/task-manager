import React, { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { toast } from "react-toastify";

const TaskItem = ({ task, provided }) => {
  const { 
    toggleTask, 
    deleteTask, 
    selectedTaskId, 
    setSelectedTaskId 
  } = useTasks();

  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    let timeout;
    if (isRemoving) {
      timeout = setTimeout(() => deleteTask(task.id), 300);
    }
    return () => clearTimeout(timeout);
  }, [isRemoving, deleteTask, task.id]);

  const handleDelete = (e) => {
    e.stopPropagation();
    setIsRemoving(true);
    toast.error("Task deleted!");
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    toggleTask(task.id);
    toast.success(task.completed ? "Task marked incomplete" : "Task completed!");
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    const newValue = selectedTaskId === task.id ? null : task.id;
    setSelectedTaskId(newValue);

    if (newValue) {
      toast.info("Task selected!");
    }
  };

  return (
    <div
      className={`task-item 
        ${task.completed ? "completed" : ""} 
        ${selectedTaskId === task.id ? "selected" : ""}
      `}
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      onClick={handleSelect}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        onClick={(e) => e.stopPropagation()}
        className="task-checkbox"
      />

      <span className="task-text">{task.text}</span>

      <button className="delete" onClick={handleDelete}>
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
