import { useState } from "react";
import axios from "axios";

export default function JobListing() {
  const [formData, setFormData] = useState({
    title: "",
    location: "Remote",
    requirements: {
      experience: "",
      skills: "",
      qualifications: "",
    },
    description: "",
    responsibilities: "",
    applyLink: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name in formData.requirements) {
      setFormData({
        ...formData,
        requirements: {
          ...formData.requirements,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }
    const processedData = {
      ...formData,
      requirements: {
        ...formData.requirements,
        skills: formData.requirements.skills
          .split(",")
          .map((skill) => skill.trim()),
      },
      responsibilities: formData.responsibilities
        .split(",")
        .map((resp) => resp.trim()),
    };

    try {
      const token = localStorage.getItem("token");
      const mainToken = `Bearer ${token}`;
      console.log(mainToken);

      const response = axios.post(
        "http://localhost:3000/api/job/listjob",
        processedData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response) {
        console.log(response);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          List a Job
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Please fill in all the required details accurately.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-900"
            >
              Job Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-900"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-semibold text-gray-900"
            >
              Experience
            </label>
            <input
              id="experience"
              name="experience"
              type="text"
              value={formData.requirements.experience}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="skills"
              className="block text-sm font-semibold text-gray-900"
            >
              Skills (comma-separated)
            </label>
            <input
              id="skills"
              name="skills"
              type="text"
              value={formData.requirements.skills}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="qualifications"
              className="block text-sm font-semibold text-gray-900"
            >
              Qualifications
            </label>
            <input
              id="qualifications"
              name="qualifications"
              type="text"
              value={formData.requirements.qualifications}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-900"
            >
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="responsibilities"
              className="block text-sm font-semibold text-gray-900"
            >
              Responsibilities (comma-separated)
            </label>
            <input
              id="responsibilities"
              name="responsibilities"
              type="text"
              value={formData.responsibilities}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="applyLink"
              className="block text-sm font-semibold text-gray-900"
            >
              Apply Link
            </label>
            <input
              id="applyLink"
              name="applyLink"
              type="url"
              value={formData.applyLink}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
        </div>
        <div className="mt-10 flex items-center">
          <input
            type="checkbox"
            id="agreed"
            name="agreed"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label htmlFor="agreed" className="ml-3 text-sm text-gray-600">
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-indigo-600">
              privacy policy
            </a>
            .
          </label>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500"
          >
            Submit Job Listing
          </button>
        </div>
      </form>
    </div>
  );
}
