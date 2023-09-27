import { createSlice } from '@reduxjs/toolkit';
const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    
    return storedTasks ? JSON.parse(storedTasks) : [];
  
  };
const initialState = {
  tasks: getTasksFromLocalStorage(), 
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: 'pending', ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: 'pending',
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      const updatedTasksInStorage = state.tasks;
      localStorage.setItem('tasks', JSON.stringify(updatedTasksInStorage));
    },
    updateStatus: (state, { payload }) => {
        const target = state.tasks.find((item) => item.id === payload.id);
        if (target) {
          target.status = payload.status;
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      },
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) =>
          item?.assignedTo === payload &&
          (item?.status === 'pending' || item?.status === 'running')
      );
    },
  },
});

export const { addTask, updateStatus, removeTask, userTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
