export const loginAccount = async ({ loginDetails }) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.PROJECTS.GET_PROJECTS,
      loginDetails
    );
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
