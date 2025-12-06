import React, { useState, useContext } from "react";
import ApplicationContext from "../context/ApplicationContext";
import './Add-applications.css'

function Addapplication() {

  const { addApplication } = useContext(ApplicationContext);

  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobType: '',
    status: '',
    location: '',
    appliedDate: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addApplication(formData);   // ← Store in global context
    alert("Application Added Successfully");

    // Clear form
    setFormData({
      companyName: '',
      jobTitle: '',
      jobType: '',
      status: '',
      location: '',
      appliedDate: '',
      notes: ''
    });
  };

  return (
  <div className="form-container">
    <h2>Add Application</h2>

    <form className="application-form" onSubmit={handleSubmit}>
      <input
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />

      <input
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
      />

      <select name="jobType" value={formData.jobType} onChange={handleChange}>
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Internship">Internship</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Rejected">Rejected</option>
        <option value="Selected">Selected</option>
      </select>

      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <input
        name="appliedDate"
        type="date"
        value={formData.appliedDate}
        onChange={handleChange}
      />

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
        rows="4"
      />

      <button type="submit">Add Application</button>
    </form>
  </div>
  );
}

export default Addapplication;
