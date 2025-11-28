// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import FilterButtons from "./components/FilterButtons";
// import ThemeToggle from "./components/ThemeToggle";
// import { TaskProvider } from "./context/TaskContext";

// import "./styles/theme.css";
// import "./styles/app.css";
// import "./styles/tasks.css";

// const App = () => {
//   return (
//     <TaskProvider>
//       <ThemeToggle />

//       <div className="app">
//         <h1>Task Manager</h1>

//         <TaskInput />
//         <FilterButtons />
//         <TaskList />
//       </div>
//     </TaskProvider>
//   );
// };

// export default App;


import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/theme.css";
import "./styles/app.css";
import "./styles/tasks.css";

const App = () => {
  return (
    <TaskProvider>
      <ToastContainer position="top-right" autoClose={2000} />
      <ThemeToggle />
      <main className="app">
        <header className="app-header">
          <h1>Task Manager</h1>
        </header>

        <section className="controls">
          <TaskInput />
          <FilterButtons />
        </section>

        <TaskList />
      </main>
    </TaskProvider>
  );
};

export default App;
