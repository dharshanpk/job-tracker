import React, { useContext, useState, useEffect } from "react";
import ApplicationContext from "../context/ApplicationContext";
import "./Applications.css";

function Applications() {
  const { applications, updateApplication, deleteApplication } = useContext(ApplicationContext);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortKey, setSortKey] = useState(""); // 'company' or 'date'
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // Filtered, searched and sorted applications
  const processedApps = applications
    .filter((app) =>
      (app.companyName.toLowerCase().includes(search.toLowerCase()) ||
        app.jobTitle.toLowerCase().includes(search.toLowerCase()))
    )
    .filter((app) => (filterType === "All" ? true : app.jobType === filterType))
    .filter((app) => (filterStatus === "All" ? true : app.status === filterStatus))
    .sort((a, b) => {
      if (sortKey === "company") {
        return a.companyName.localeCompare(b.companyName);
      } else if (sortKey === "date") {
        return new Date(b.appliedDate) - new Date(a.appliedDate);
      }
      return 0;
    });

  const totalPages = Math.ceil(processedApps.length / itemsPerPage);

  const paginatedApps = processedApps.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (index) => {
    const newTitle = prompt("Enter new Job Title", paginatedApps[index].jobTitle);
    if (newTitle) {
      const globalIndex = applications.indexOf(paginatedApps[index]);
      updateApplication(globalIndex, { ...paginatedApps[index], jobTitle: newTitle });
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this application?");
    if (confirmDelete) {
      const globalIndex = applications.indexOf(paginatedApps[index]);
      deleteApplication(globalIndex);
    }
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on search/filter change
  }, [search, filterType, filterStatus]);

  return (
    <div className="applications-container">
      <h2>Applications</h2>

      {/* Search & Filters */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by company or job title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Internship">Internship</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
          <option value="Selected">Selected</option>
        </select>
      </div>

      {/* Sorting Buttons */}
      <div className="sorting-buttons">
        <button onClick={() => setSortKey("company")}>Sort by Company (A–Z)</button>
        <button onClick={() => setSortKey("date")}>Sort by Applied Date (Newest → Oldest)</button>
        <button onClick={() => setSortKey("")}>Reset Sorting</button>
      </div>

      {/* Applications Table */}
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Job Type</th>
            <th>Status</th>
            <th>Location</th>
            <th>Applied Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedApps.map((app, index) => (
            <tr key={index}>
              <td>{app.companyName}</td>
              <td>{app.jobTitle}</td>
              <td>{app.jobType}</td>
              <td>{app.status}</td>
              <td>{app.location}</td>
              <td>{app.appliedDate}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
          {paginatedApps.length === 0 && (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Applications;
