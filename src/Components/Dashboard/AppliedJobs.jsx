import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/api/user/applied`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAppliedJobs(response.data.applications);
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (appliedJobs.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold text-gray-800">Applied Jobs</h2>
        <p className="mt-2 text-gray-600">
          You haven't applied for any jobs yet.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800">Applied Jobs</h2>
      <p className="mt-2 text-gray-600">
        View all the jobs you have applied to here.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {appliedJobs.map((application) => (
          <div
            key={application._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {application.jobId.title}
            </h3>
            <p className="text-gray-700 mt-1">
              <strong>Company:</strong> {application.jobId.organizationName}
            </p>
            <p className="text-gray-700 mt-1">
              <strong>Location:</strong> {application.jobId.location}
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Applied on: {new Date(application.appliedAt).toLocaleDateString()}
            </p>
            <a
              href={application.jobId.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-purple-700 font-medium hover:underline"
            >
              View Job Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
