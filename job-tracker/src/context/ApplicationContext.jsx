import { createContext, useState } from "react";

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([]);

  const addApplication = (app) => {
    setApplications((prev) => [...prev, app]);
  };

  const updateApplication = (index, updatedApp) => {
    const newApps = [...applications];
    newApps[index] = updatedApp;
    setApplications(newApps);
  };

  const deleteApplication = (index) => {
    const newApps = applications.filter((_, i) => i !== index);
    setApplications(newApps);
  };

  return (
    <ApplicationContext.Provider
      value={{ applications, addApplication, updateApplication, deleteApplication }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContext;

