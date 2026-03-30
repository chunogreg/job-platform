import { useState } from "react";
import jobs from "./jobs.json";
const App = () => {
  const [visaAllow, setVisaAllow] = useState(false);
  const [remoteWorldwide, setRemoteWorldwide] = useState(false);
  const [entryLevel, setEntryLevel] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    if (job["visa"] && visaAllow) return true;
    if (job["remote"] === "worldwide" && remoteWorldwide) return true;
    if (job["level"] === "junior" && entryLevel) return true;
  });

  return (
    <>
      <h1>🌍 Global Opportunities (Remote & Visa Sponsored Jobs)</h1>
      <p>
        Find global job oppotunities including - fully remote (worldwide)
        -Onsite roles with visa sponsorship - Entry-Level positions
      </p>
      <h2>Job Listing</h2>
      <div className="boxes">
        <label>
          <input
            type="checkbox"
            checked={remoteWorldwide}
            onChange={(e) => setRemoteWorldwide(e.target.checked)}
          />
          Remote Worldwide
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={visaAllow}
            onChange={(e) => setVisaAllow(e.target.checked)}
          />
          Visa Sponsorship
        </label>
        <label>
          <input
            type="checkbox"
            checked={entryLevel}
            onChange={(e) => setEntryLevel(e.target.checked)}
          />
          Entry Level / Junior
        </label>
      </div>

      <br />

      {filteredJobs.map((job, index) => (
        <div key={index}>
          <h3> {job.title}</h3>
          <p> {job.company}</p>
          <p>
            {job.remote === "worldwide"
              ? "🌍 Remote: " + job.remote
              : "Remote: " + job.remote}
          </p>
          <p> {job.visa ? "Visa Sponsorship" : "❌ Visa Sponsorship"}</p>
          <p> Level: {job.level}</p>

          <p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </p>
        </div>
      ))}
      <div>
        <p>Last updated: March 2026</p>
        <p>
          Jobs are sourced from public listings and link directly to original
          application pages
        </p>
      </div>
    </>
  );
};

export default App;
