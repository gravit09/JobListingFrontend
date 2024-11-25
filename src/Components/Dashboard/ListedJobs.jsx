import React, { useEffect, useState } from "react";
import axios from "axios";

const ListedJobs = ({ filters }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/job/orgjobs",
          {
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setProjects(response.data.jobsListedByThisOrg);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/job/deletejob",
        { _id: id },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProjects((prevJobs) => prevJobs.filter((job) => job._id !== id));
      console.log("Job deleted successfully", response.data);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
      {currentProjects.length > 0 ? (
        currentProjects.map((project) => (
          <div
            key={project._id}
            className="bg-white transform transition-transform duration-300 hover:scale-105 shadow-xl shadow-gray-100 w-full max-w-6xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-2 mb-4 rounded-md"
          >
            <div>
              <h3 className="font-bold">
                {project.organizationName} |
                <span className="text-gray-500"> {project.title}</span>
              </h3>
              <div className="flex items-center">
                <ion-icon name="location-outline"></ion-icon>
                <h4 className="mt-1 ml-1 text-gray-500">{project.location}</h4>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.requirements.skills.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 rounded-full text-sm justify-center p-2 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <a
                //href={project.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
                onClick={() => handleDelete(project._id)}
              >
                Delete
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))
      ) : (
        <div>No projects match the selected filters</div>
      )}

      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-900 text-white"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-900 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListedJobs;
