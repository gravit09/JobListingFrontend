import React, { useEffect, useState } from "react";
import axios from "axios";

const OrganizationListing = () => {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const orgsPerPage = 5;

  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/org/getall"
        );
        setOrgs(response.data.allOrgs);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchOrgs();
  }, []);

  const totalPages = Math.ceil(orgs.length / orgsPerPage);
  const indexOfLastOrg = currentPage * orgsPerPage;
  const indexOfFirstOrg = indexOfLastOrg - orgsPerPage;
  const currentOrgs = orgs.slice(indexOfFirstOrg, indexOfLastOrg);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
      {currentOrgs.map((org) => (
        <div
          key={org._id}
          className="bg-white transform transition-transform duration-300 hover:scale-110 shadow-xl shadow-gray-100 w-full max-w-5xl flex gap-4 items-center px-5 py-4 mb-4 rounded-md"
        >
          <img
            src={org.imageUrl}
            alt={`${org.name} banner`}
            className="w-28 h-24 object-contain rounded-md"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">
              {org.name} |
              <span className="text-gray-500"> Founded: {org.founded}</span>
            </h3>
            <p className="text-gray-700 mt-2">{org.description}</p>
            <div className="mt-2">
              <span className="bg-gray-100 text-gray-700 rounded-full text-sm p-2">
                Size: {org.size}
              </span>
              <span className="bg-gray-100 text-gray-700 rounded-full text-sm p-2 ml-2">
                Type: {org.type}
              </span>
            </div>
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

export default OrganizationListing;
