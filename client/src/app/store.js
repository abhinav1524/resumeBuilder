// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from '../features/resume/resumeSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../utility/localstorage';
const preloadedState = loadFromLocalStorage();
const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
  preloadedState,
});

// Subscribe to store changes to save to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});

export default store;