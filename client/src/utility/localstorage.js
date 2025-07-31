export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("resumeState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load from localStorage", e);
    return undefined;
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("resumeState", serializedState);
  } catch (e) {
    console.warn("Could not save to localStorage", e);
  }
};