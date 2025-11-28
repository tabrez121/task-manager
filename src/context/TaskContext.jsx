
import React, { createContext, useContext, useCallback, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all"); // all | completed | pending
  const [selectedTaskId, setSelectedTaskId] = useState(null);


  const addTask = useCallback(
    (text) => {
      setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
      toast.success("Task added!");
    },
    [setTasks]
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    },
    [setTasks]
  );

  const reorderTasks = useCallback(
    (startIndex, endIndex) => {
      setTasks((prev) => {
        const result = Array.from(prev);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      });
    },
    [setTasks]
  );

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((t) => t.completed);
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      addTask,
      toggleTask,
      deleteTask,
      reorderTasks,
      filter,
      setFilter,
      selectedTaskId,
      setSelectedTaskId,
    }),
    [tasks, filteredTasks, addTask, toggleTask, deleteTask, reorderTasks, filter,selectedTaskId]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => useContext(TaskContext);
