import React, { useCallback } from "react";
import { useTasks } from "../context/TaskContext";

const FilterButtons = () => {
  const { filter, setFilter } = useTasks();

  const set = useCallback(
    (val) => () => {
      setFilter(val);
    },
    [setFilter]
  );

  return (
    <div className="filters" role="tablist" aria-label="Task filters">
      
      <button className={filter === "all" ? "active" : ""} onClick={set("all")}>
        All
      </button>
      <button className={filter === "completed" ? "active" : ""} onClick={set("completed")}>
        Completed
      </button>
      <button className={filter === "pending" ? "active" : ""} onClick={set("pending")}>
        Pending
      </button>
    </div>
  );
};

export default React.memo(FilterButtons);
