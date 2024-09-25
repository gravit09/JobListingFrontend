export const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Most Stars", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];

export const filters = [
  {
    id: "Tech Stack",
    name: "Tech Stack",
    options: [
      { value: "React", label: "React", checked: false },
      { value: "Express", label: "Express", checked: false },
      { value: "Django", label: "Django", checked: true },
      { value: "Nodejs", label: "Nodejs", checked: false },
      { value: "Angular", label: "Angular", checked: false },
      { value: "Vuejs", label: "Vuejs", checked: false },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    options: [
      { value: "Javascript", label: "Javascript", checked: false },
      { value: "Python", label: "Python", checked: false },
      { value: "Java", label: "Java", checked: true },
      { value: "Go", label: "Go", checked: false },
      { value: "C/C++", label: "C/C++", checked: false },
    ],
  },
  {
    id: "others",
    name: "Other Tags",
    options: [
      { value: "Frontend", label: "Frontend", checked: false },
      { value: "Backend", label: "Backend", checked: false },
      { value: "API", label: "API", checked: false },
      { value: "Machine Learning", label: "Machine Learning", checked: false },
      { value: "Data Science", label: "Data Science", checked: false },
    ],
  },
];
