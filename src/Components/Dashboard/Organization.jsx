import { useState } from "react";

export default function Organization() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    size: "",
    founded: "",
    type: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Create an Organization
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Please fill in the details of the organization.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Organization Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
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
              Description
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
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-semibold text-gray-900"
            >
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="size"
              className="block text-sm font-semibold text-gray-900"
            >
              Size
            </label>
            <input
              id="size"
              name="size"
              type="text"
              value={formData.size}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="founded"
              className="block text-sm font-semibold text-gray-900"
            >
              Founded Year
            </label>
            <input
              id="founded"
              name="founded"
              type="number"
              value={formData.founded}
              onChange={handleInputChange}
              className="mt-2.5 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-semibold text-gray-900"
            >
              Organization Type
            </label>
            <input
              id="type"
              name="type"
              type="text"
              value={formData.type}
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
            Submit Organization
          </button>
        </div>
      </form>
    </div>
  );
}
