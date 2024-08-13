// src/services/projectService.js
import apiClient from "../apiConfig";
import { API_ENDPOINTS } from "../../constants/apiConstants";

// Get all projects
export const getProjects = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.PROJECTS.GET_PROJECTS);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Get a specific project by ID
export const getProjectById = async (id) => {
  try {
    const response = await apiClient.get(
      API_ENDPOINTS.PROJECTS.GET_PROJECT_BY_ID(id)
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    throw error;
  }
};

// Create a new project
export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.PROJECTS.GET_PROJECTS,
      projectData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
