import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Job Tracker</h1>
          <p>Organize your job applications, track statuses, and never miss a deadline.</p>
        </div>
      </section>

      {/* Multi-Column Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>Track Applications</h3>
          <p>Keep all your applications in one place with easy access to details.</p>
        </div>
        <div className="feature-card">
          <h3>Status Updates</h3>
          <p>Monitor application statuses like Applied, Interview, Rejected, or Selected.</p>
        </div>
        <div className="feature-card">
          <h3>Notes & Reminders</h3>
          <p>Add notes or reminders for each application to stay organized.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <h2>Why Use Job Tracker?</h2>
        <p>
          Managing job applications can be overwhelming. With Job Tracker, you can track multiple applications,
          update statuses, add notes, and see everything in a clean dashboard. Stay organized and increase your
          chances of landing the job you want!
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; {new Date().getFullYear()} Job Tracker. All rights reserved.</p>
        <p>Contact: support@jobtracker.com</p>
      </footer>
    </div>
  );
}

export default Home;

