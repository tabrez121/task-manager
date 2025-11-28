# 📝 Task Manager – React Project  
A modern, beautiful, and fully responsive **Task Manager Application** built using **React**, **Context API**, **Custom Hooks**, and **@hello-pangea/dnd** for drag-and-drop functionality.

This project covers all required assignment features and includes additional enhancements such as toast notifications, animations, task selection, and theme toggling.

---

## 🚀 Features

### ✅ **Basic Functionality**
- ➕ **Add Tasks** (with input validation)
- ✔️ **Mark Tasks as Completed** (checkbox UI)
- 🗑 **Delete Tasks** (with animation)
- 🔍 **Filter Tasks**  
  - **All**
  - **Completed**
  - **Pending**
- 💾 **Persistent Storage** using Local Storage

---

## ⚛️ **React Concepts Implemented**

### 🔧 **Custom Hook – `useLocalStorage()`**
A fully reusable hook for:
- Saving tasks to localStorage  
- Restoring tasks on refresh  
- Auto-sync with state

### 🧠 **Context API**
Manages global state for:
- Tasks  
- Filters  
- Selection  
- Drag-and-drop order  
- All CRUD operations  

No prop-drilling!

### ⚡ **Performance Optimization**
- `React.memo` → Prevents unnecessary re-renders  
- `useCallback` → Optimizes event handlers  
- `useMemo` → Optimizes computed filtered tasks  
- Context partitioning → Efficient updates  

---

## 🎨 **UI & CSS Features**

### ☀️🌙 **Dark Mode / Light Mode**
- Theme toggle button  
- Colors handled with CSS variables  
- Fully responsive to theme changes

### ✨ **Animations**
Includes smooth, modern animations for:
- Task adding  
- Task removing  
- Hover elevation  
- Dragging shadow + rotation  
- Empty state fade animation  
- Selected task highlight  

### 📱 **Responsive Design**
- Mobile-first  
- Fully responsive task layout  
- Touch-friendly drag-and-drop  

---

## 🧲 **Drag and Drop – @hello-pangea/dnd**
- Drag tasks to reorder  
- Smooth animation  
- Stable React 19 compatibility  
- Works with filters & context  
- Styled drag shadow + scale effect  

---

## 🔔 **Toast Notifications**
Using **react-toastify**:
- Task added  
- Task deleted  
- Task completed  
- Task selected  

---

## 🖼 **Task Selection Feature**
- Click task → highlights it  
- Selected style works in both themes  
- Does not interfere with completed tasks  
- Great UX improvement  

---

## 📂 **Project Structure**

src/
│── components/
│ ├── TaskInput.jsx
│ ├── TaskList.jsx
│ ├── TaskItem.jsx
│ ├── SortableTask.jsx (if used)
│
│── context/
│ └── TaskContext.jsx
│
│── hooks/
│ └── useLocalStorage.js
│
│── styles/
│ ├── tasks.css
│ ├── theme.css
│
│── App.js
│── index.js


---

## 🛠️ **Technologies Used**
- **React 19**
- **Context API**
- **Custom Hooks**
- **@hello-pangea/dnd** (Drag and Drop)
- **React Toastify**
- **CSS3 Animations**
- **Local Storage API**

---

## 📦 **Installation & Setup**

npm install
npm start