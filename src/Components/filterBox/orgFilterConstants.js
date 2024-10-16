export const companySortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Most Employees", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];

export const companyFilters = [
  {
    id: "Industry",
    name: "Industry",
    options: [
      { value: "Software", label: "Software", checked: false },
      { value: "Healthcare", label: "Healthcare", checked: false },
      { value: "Finance", label: "Finance", checked: false },
      { value: "Education", label: "Education", checked: false },
      { value: "E-commerce", label: "E-commerce", checked: false },
      { value: "Manufacturing", label: "Manufacturing", checked: false },
    ],
  },
  {
    id: "Company Size",
    name: "Company Size",
    options: [
      { value: "1-10", label: "1-10 Employees", checked: false },
      { value: "11-50", label: "11-50 Employees", checked: false },
      { value: "51-200", label: "51-200 Employees", checked: false },
      { value: "201-500", label: "201-500 Employees", checked: false },
      { value: "501-1000", label: "501-1000 Employees", checked: false },
      { value: "1000+", label: "1000+ Employees", checked: false },
    ],
  },
  {
    id: "Location",
    name: "Location",
    options: [
      { value: "Remote", label: "Remote", checked: false },
      { value: "USA", label: "USA", checked: false },
      { value: "India", label: "India", checked: false },
      { value: "Germany", label: "Germany", checked: false },
      { value: "UK", label: "UK", checked: false },
      { value: "Canada", label: "Canada", checked: false },
    ],
  },
  {
    id: "Company Type",
    name: "Company Type",
    options: [
      { value: "Startup", label: "Startup", checked: false },
      { value: "MNC", label: "MNC", checked: false },
      { value: "NGO", label: "NGO", checked: false },
      { value: "Government", label: "Government", checked: false },
      { value: "Non-Profit", label: "Non-Profit", checked: false },
    ],
  },
];
