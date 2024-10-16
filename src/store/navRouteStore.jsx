import React, { createContext, useState, useContext, useEffect } from "react";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const storedRoute = localStorage.getItem("activeRoute") || "jobs";
  const [activeRoute, setActiveRoute] = useState(storedRoute);

  useEffect(() => {
    localStorage.setItem("activeRoute", activeRoute);
  }, [activeRoute]);

  return (
    <RouteContext.Provider value={{ activeRoute, setActiveRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => {
  return useContext(RouteContext);
};
