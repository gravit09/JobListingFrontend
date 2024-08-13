import React, { useEffect, useState } from "react";
import { getProjects } from "../../../api/project";

const JobList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch projects.");
        setLoading(false);
      }
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 mb-4 rounded-md"
        >
          <div>
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-700 mt-1">{project.shortDescription}</p>
            <div className="flex gap-2 mt-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm"
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
    </div>
  );
};

export default JobList;
