import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import ProjectListing from "../ProjectListing/ProjectListing";
import { Jobfilters } from "./FilterConstant";
import { companyFilters } from "./orgFilterConstants";
import { useRoute } from "../../store/navRouteStore";
import OrganizationListing from "../orgList/OrgList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const { activeRoute } = useRoute();
  const filters = activeRoute === "jobs" ? Jobfilters : companyFilters;

  // Sync the selected filters with the filters on load
  useEffect(() => {
    const initialFilters = filters.reduce((acc, section) => {
      acc[section.id] = section.options
        .filter((option) => option.checked)
        .map((option) => option.value);
      return acc;
    }, {});

    setSelectedFilters(initialFilters);
  }, [filters]);

  useEffect(() => {
    console.log("Selected Filters: ", selectedFilters);
  }, [selectedFilters]);

  const handleFilterChange = (sectionId, value, checked) => {
    setSelectedFilters((prevFilters) => {
      const updatedSection = checked
        ? [...(prevFilters[sectionId] || []), value] // Add the value if checked
        : prevFilters[sectionId].filter((v) => v !== value); // Remove the value if unchecked

      return {
        ...prevFilters,
        [sectionId]: updatedSection,
      };
    });
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              value={option.value}
                              checked={(
                                selectedFilters[section.id] || []
                              ).includes(option.value)}
                              onChange={(e) =>
                                handleFilterChange(
                                  section.id,
                                  option.value,
                                  e.target.checked
                                )
                              }
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-12xl px-4 sm:px-6 lg:px-12">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-14">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {activeRoute == "jobs"
                ? "Find Your Dream Job"
                : "Find Your Dream Organisation"}
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block lg:col-span-1">
                <h3 className="sr-only">Categories</h3>
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              checked={(
                                selectedFilters[section.id] || []
                              ).includes(option.value)}
                              onChange={(e) =>
                                handleFilterChange(
                                  section.id,
                                  option.value,
                                  e.target.checked
                                )
                              }
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Project Listing / Organization Listing */}
              <div className="lg:col-span-4">
                {activeRoute === "jobs" ? (
                  <ProjectListing filters={selectedFilters} />
                ) : (
                  <OrganizationListing />
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
