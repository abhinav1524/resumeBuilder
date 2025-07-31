// src/features/resume/resumeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
  data: {
    header: {},
    skills: [],
    experience: [],
    projects: [],
    education: [],
    certificates: [],
  },
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < 6) {
        state.currentStep += 1;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
    setHeader: (state, action) => {
      state.data.header = action.payload;
    },
    setSkills: (state, action) => {
      state.data.skills = action.payload;
    },
    setExperience: (state, action) => {
      state.data.experience = action.payload;
    },
    setProjects: (state, action) => {
      state.data.projects = action.payload;
    },
    setEducation: (state, action) => {
      state.data.education = action.payload;
    },
    setCertificates: (state, action) => {
      state.data.certificates = action.payload;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setHeader,
  setSkills,
  setExperience,
  setProjects,
  setEducation,
  setCertificates,
} = resumeSlice.actions;

export default resumeSlice.reducer;
