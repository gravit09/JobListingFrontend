import React, { useEffect, useState } from "react";
import { getProjects } from "../../api/project";

const ProjectListing = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Add state for the current page
  const projectsPerPage = 5; // Number of projects to show per page

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  //pagination logic
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
      {currentProjects.map((project) => (
        <div
          key={project._id}
          className="bg-white transform transition-transform duration-300 hover:scale-110 shadow-xl shadow-gray-100 w-full max-w-5xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 mb-4 rounded-md"
        >
          <div>
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-700 mt-1">
              {project.description.slice(0, 80)}
            </p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {project.tags.map((tag, index) => (
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
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
            >
              View Project
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
      ))}

      {/* Pagination controls */}
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

export default ProjectListing;
