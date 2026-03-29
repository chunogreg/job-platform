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
      <h1>Job Listing</h1>
      {jobs.map((job, index) => (
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
          <p> Link: {job.link}</p>
        </div>
      ))}
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
      {filteredJobs.map((job, index) => (
        <div key={index}>
          <h3> {job.title}</h3>
          <p> {job.company}</p>
          <p>Remote: {job.remote}</p>
          <p> Visa: {job.visa ? "Yes" : "No"}</p>
          <p> Level: {job.level}</p>
        </div>
      ))}
      <br />
      <button onClick={() => window.open("https://google.com")}>Apply</button>
      <br />
      <br />
    </>
  );
};

export default App;
