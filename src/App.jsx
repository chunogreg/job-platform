import { useState } from "react";
import jobs from "./jobs.json";
import Feedback from "./Feedback";
const App = () => {
  const [visaAllow, setVisaAllow] = useState(false);
  const [remoteWorldwide, setRemoteWorldwide] = useState(false);
  const [entryLevel, setEntryLevel] = useState(false);
  const [search, setSearch] = useState("");
  const [allJobs, setAllJobs] = useState([]);

  const filteredJobs = jobs.filter((job) => {
    if (job["visa"] && visaAllow) return true;
    if (job["remote"] === "worldwide" && remoteWorldwide) return true;
    if (job["level"] === "junior" && entryLevel) return true;
    if (
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    ) {
      if (search) return true;
    }
  });

  return (
    <>
      <h1>🌍 Global Opportunities (Remote & Visa Sponsored Jobs)</h1>
      <p>
        Find global job oppotunities including - fully remote (worldwide)
        -Onsite roles with visa sponsorship - Entry-Level positions
      </p>
      <input
        type="text"
        placeholder=" 🔍︎ Search jobs . . ."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
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
        <button
          onClick={() => {
            setAllJobs(jobs);
          }}
        >
          <h4>View All Jobs</h4>
        </button>
      </div>

      <h2>Job Listing</h2>

      <br />
      {filteredJobs.length > 0
        ? filteredJobs.map((job, index) => (
            <div key={index}>
              <h3> {job.title}</h3>
              <p> {job.company}</p>
              <p>
                {job.remote === "worldwide"
                  ? "🌍 Remote: " + job.remote
                  : "Remote: " + job.remote}
              </p>
              <p>
                {job.visa ? "🛂 Visa Sponsorship" : "❌ No Visa Sponsorship"}
              </p>
              <p> 🎯 Level: {job.level}</p>

              <p>
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </p>
            </div>
          ))
        : search && (
            <p>
              No jobs matches your criteria right now. Try adjusting your
              filters
            </p>
          )}
      {allJobs.map((job, index) => (
        <div key={index}>
          <h3> {job.title}</h3>
          <p> {job.company}</p>
          <p>
            {job.remote === "worldwide"
              ? "🌍 Remote: " + job.remote
              : "Remote: " + job.remote}
          </p>
          <p>{job.visa ? "🛂 Visa Sponsorship" : "❌ No Visa Sponsorship"}</p>
          <p> 🎯 Level: {job.level}</p>

          <p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </p>
        </div>
      ))}
      <div>
        <footer>
          <p>Last updated: March 2026</p>
          <p>
            Jobs are sourced from public listings and link directly to original
            application pages
          </p>

          <Feedback />
        </footer>
      </div>
    </>
  );
};

export default App;
