import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const OrganizationListing = ({ filters }) => {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const orgsPerPage = 5;

  const { searchText } = useOutletContext();

  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/org/getall"
        );
        setOrgs(response.data.allOrgs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching organizations:", error);
        setLoading(false);
      }
    };
    fetchOrgs();
  }, []);

  const applyFilters = (orgs) => {
    return orgs.filter((org) => {
      const matchesSearchText = searchText
        ? org.name.toLowerCase().includes(searchText.toLowerCase()) ||
          org.description.toLowerCase().includes(searchText.toLowerCase())
        : true;

      const matchesOtherFilters = Object.entries(filters).every(
        ([filterKey, selectedValues]) => {
          if (!selectedValues || selectedValues.length === 0) return true;

          if (filterKey === "Industry") {
            return selectedValues.some((value) =>
              org.description.toLowerCase().includes(value.toLowerCase())
            );
          }

          if (filterKey === "Company Size") {
            return selectedValues.some((value) =>
              org.size.toLowerCase().includes(value.toLowerCase())
            );
          }
          return true;
        }
      );

      return matchesSearchText && matchesOtherFilters;
    });
  };

  const filteredOrgs = applyFilters(orgs);

  const totalPages = Math.ceil(filteredOrgs.length / orgsPerPage);
  const indexOfLastOrg = currentPage * orgsPerPage;
  const indexOfFirstOrg = indexOfLastOrg - orgsPerPage;
  const currentOrgs = filteredOrgs.slice(indexOfFirstOrg, indexOfLastOrg);

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
          className="bg-white transform transition-transform duration-300 justify-between hover:scale-105 shadow-xl shadow-gray-100 w-full max-w-5xl flex gap-4 items-center px-5 py-4 mb-4 rounded-md"
        >
          <div>
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
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
            >
              View
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

export default OrganizationListing;
