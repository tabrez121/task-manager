import React, { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";

import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { filteredTasks, reorderTasks } = useTasks();

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const sourceIndex = result.source.index;
      const destIndex = result.destination.index;

      if (sourceIndex === destIndex) return;

      reorderTasks(sourceIndex, destIndex);
    },
    [reorderTasks]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >

            {/* 🟦 Show empty message when no tasks */}
            {filteredTasks.length === 0 && (
              <div className="empty">
                No tasks yet — add your first task ✨
              </div>
            )}

            {/* 🟩 Render task list */}
            {filteredTasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={String(task.id)}
                index={index}
              >
                {(dragProvided) => (
                  <TaskItem task={task} provided={dragProvided} />
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
