import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function JobDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Job Listings", path: "/dashboard/job-listings" },
    { name: "Applied Jobs", path: "/dashboard/applied-jobs" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } fixed inset-0 z-40 flex lg:static lg:inset-auto lg:z-auto lg:block lg:w-64`}
      >
        <div className="flex flex-col bg-white w-64 border-r min-h-screen">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h1 className="text-lg font-bold text-gray-900">Job Dashboard</h1>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <nav className="mt-4 flex-1 space-y-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 left-4 z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white shadow"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet /> {/* Renders the matched child component */}
      </div>
    </div>
  );
}
