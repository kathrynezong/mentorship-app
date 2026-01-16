import React, { useState } from "react";
import "./App.css";

const pastWeeksData = [
  {
    week: "Week 1",
    notes: "Kickoff meeting. Set mentorship goals: improve communication, complete milestone 1, expand network. Discussed expectations and agreed on weekly check-ins."
  },
  {
    week: "Week 2",
    notes: "Reviewed progress on milestone 1. Noted challenges with time management. Shared resources for productivity. Scheduled next session."
  },
  {
    week: "Week 3",
    notes: "Practiced communication skills in a mock interview. Feedback given. Discussed networking strategies and upcoming events."
  },
  {
    week: "Week 4",
    notes: "Checked in on project status. Celebrated completion of milestone 1. Set new goals for next month. Reflected on learning so far."
  }
];

export default function MentorshipTracker() {
  const [expandedWeek, setExpandedWeek] = useState(null);

  return (
    <div className="mentorship-tracker">
      <h1>WTAP Mentorship</h1>
      <p><strong>Next scheduled session:</strong> 01/16/2026</p>

      <div className="tracker-sections">
        <div style={{ flex: 1 }}>
          <div style={{ textAlign: "left", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Mentorship Goals</div>
          <section className="main-goals">
            <ul>
              <li>Improve communication skills</li>
              <li>Complete project milestone 1</li>
              <li>Expand professional network</li>
            </ul>
          </section>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ textAlign: "left", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Weekly Prompts</div>
          <section className="weekly-prompts">
            <ul>
              <li>What did you accomplish this week?</li>
              <li>What challenges did you face?</li>
              <li>What will you focus on next week?</li>
            </ul>
          </section>
        </div>
      </div>

      <section className="past-weeks-list-horizontal">
        <h2>Past Weeks</h2>
        <div className="weeks-row">
          {pastWeeksData.map((weekData, idx) => (
            <div key={weekData.week} className={`week-popup${expandedWeek === idx ? " active" : ""}`}>
              <button onClick={() => setExpandedWeek(idx)}>
                {weekData.week}
              </button>
            </div>
          ))}
        </div>
      </section>

      {expandedWeek !== null && (
        <div className="modal-overlay" onClick={() => setExpandedWeek(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{pastWeeksData[expandedWeek].week} Notes</h3>
            <p>{pastWeeksData[expandedWeek].notes}</p>
            <button onClick={() => setExpandedWeek(null)} style={{ marginTop: "1rem" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
