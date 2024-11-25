import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";

const ProjectListing = ({ filters }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { searchText } = useOutletContext();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/job/alljobs"
        );
        setProjects(response.data.allJobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Apply filters based on the props passed
  const applyFilters = (projects) => {
    return projects.filter((project) => {
      const matchesSearchText = searchText
        ? project.title.toLowerCase().includes(searchText.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          project.requirements.skills.some(
            (skill) =>
              skill.toLowerCase().includes(searchText.toLowerCase()) ||
              project.organizationName
                .toLowerCase()
                .includes(searchText.toLowerCase())
          )
        : true;

      // Apply other filters
      const matchesOtherFilters = Object.entries(filters).every(
        ([filterKey, selectedValues]) => {
          if (!selectedValues || selectedValues.length === 0) return true;

          if (filterKey === "Tech Stack") {
            return selectedValues.some((value) =>
              project.requirements.skills.includes(value)
            );
          }

          if (filterKey === "languages") {
            return selectedValues.some((value) =>
              project.requirements.skills.some((skill) => skill.includes(value))
            );
          }

          if (filterKey === "others") {
            return selectedValues.some((value) =>
              project.requirements.skills.some((skill) => skill.includes(value))
            );
          }

          return true;
        }
      );

      // Combine both search text and other filters
      return matchesSearchText && matchesOtherFilters;
    });
  };

  const redirectHandler = (applyLink) => {
    if (isAuthenticated) {
      window.open(applyLink, "_blank");
    } else {
      navigate("/login");
    }
  };

  const filteredProjects = applyFilters(projects);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
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
                onClick={() => redirectHandler(project.applyLink)}
                className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center cursor-pointer"
              >
                Apply
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

export default ProjectListing;
