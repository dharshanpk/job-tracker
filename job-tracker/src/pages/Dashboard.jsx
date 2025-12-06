import React, { useContext } from "react";
import ApplicationContext from "../context/ApplicationContext";
import "./Dashboard.css";

function Dashboard() {
  const { applications } = useContext(ApplicationContext);

  // Count applications by status
  const total = applications.length;
  const applied = applications.filter(app => app.status === "Applied").length;
  const interview = applications.filter(app => app.status === "Interview Scheduled").length;
  const selected = applications.filter(app => app.status === "Selected").length;
  const rejected = applications.filter(app => app.status === "Rejected").length;

  // Last 5 applications
  const lastFive = [...applications].slice(-5).reverse();

  return (
    <div className="dashboard-container">
      <h2>Dashboard Summary</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card total">
          <h3>Total Applications</h3>
          <p>{total}</p>
        </div>
        <div className="card applied">
          <h3>Applied</h3>
          <p>{applied}</p>
        </div>
        <div className="card interview">
          <h3>Interview Scheduled</h3>
          <p>{interview}</p>
        </div>
        <div className="card selected">
          <h3>Selected</h3>
          <p>{selected}</p>
        </div>
        <div className="card rejected">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>
      </div>

      {/* Last 5 Applications */}
      <div className="last-five">
        <h3>Last 5 Applications</h3>
        {lastFive.length === 0 ? (
          <p>No applications yet.</p>
        ) : (
          <ul>
            {lastFive.map((app, index) => (
              <li key={index}>
                {app.companyName} - {app.jobTitle} ({app.status})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
