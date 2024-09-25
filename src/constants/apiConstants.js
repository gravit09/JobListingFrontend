// src/constants/apiConstants.js
// Base API URL
export const API_BASE_URL = "http://localhost:5000";

// API Endpoints
export const API_ENDPOINTS = {
  USER: {
    CREATE_USER: "/user/create_user",
    LOGIN: "/user/login",
  },

  PROJECTS: {
    GET_PROJECTS: "/project/get_projects",
    GET_PROJECT_BY_ID: "/project/get_projects_by_id",
    GET_PROJECT_BY_USER_ID: "/project/get_projects_by_user_id",
  },
};
