import React from "react";

const JobList = () => {
  const jobData = [
    {
      id: 1,
      department: "Engineering",
      title: "Senior Full Stack Backend Engineer",
      type: "Full-time",
      location: "Remote, UK",
      tags: ["React", "Node.js", "AWS"],
    },
    {
      id: 2,
      department: "Design",
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Remote, US",
      tags: ["Figma", "Sketch", "Adobe XD"],
    },
    {
      id: 3,
      department: "Marketing",
      title: "Digital Marketing Specialist",
      type: "Contract",
      location: "New York, US",
      tags: ["SEO", "Google Ads", "Content Strategy"],
    },
  ];

  return (
    <div className="relative flex  flex-col items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
      {jobData.map((job) => (
        <div
          key={job.id}
          className="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 mb-4 rounded-md"
        >
          <div>
            <span className="text-purple-800 text-sm">{job.department}</span>
            <h3 className="font-bold mt-px">{job.title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                {job.type}
              </span>
              <span className="text-slate-600 text-sm flex gap-1 items-center">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {job.location}
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              {job.tags.map((tag, index) => (
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
            <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
              Apply Now
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
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
