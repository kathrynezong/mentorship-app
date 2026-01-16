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
      <h1 className="main-title">Mentorship with Kathryne</h1>
      <div className="next-meeting-text">Your next meeting is in <span className="meeting-days">3 days</span></div>


      <div className="main-content-row">
        <div className="main-goals-col">
          <div className="section-label">Our Main Goals</div>
          <div className="goals-cards">
            <div className="goal-card goal1">
              <div className="goal-number">1</div>
              <div className="goal-title">Self-Awareness</div>
              <div className="goal-desc">Reflect values that shape your professional identity</div>
            </div>
            <div className="goal-card goal2">
              <div className="goal-number">2</div>
              <div className="goal-title">Career Direction</div>
              <div className="goal-desc">Define career aspirations</div>
            </div>
            <div className="goal-card goal3">
              <div className="goal-number">3</div>
              <div className="goal-title">Skill Development</div>
              <div className="goal-desc">Identify and build the skills to achieve these goals</div>
            </div>
            <div className="goal-card goal4">
              <div className="goal-number">4</div>
              <div className="goal-title">Mentor Support</div>
              <div className="goal-desc">Establish how your mentor can best support you</div>
            </div>
            <div className="goal-card goal5">
              <div className="goal-number">5</div>
              <div className="goal-title">Mentor Support</div>
              <div className="goal-desc">Establish how your mentor can best support you</div>
            </div>
          </div>
        </div>
        <div className="weekly-review-col">
          <div className="section-label">Weekly Review</div>
          <div className="weekly-cards-row">
            <div className="weekly-card week1">
              <div className="week-title">Week 1</div>
              <div className="week-desc">Getting Started + Goal Setting</div>
              <button className="review-btn" onClick={() => setExpandedWeek(0)}>Review &gt;&gt;&gt;</button>
            </div>
            <div className="weekly-card week2">
              <div className="week-title">Week 2</div>
              <div className="week-desc">Working at RBC & Making Good Impressions</div>
              <button className="review-btn" onClick={() => setExpandedWeek(1)}>Review &gt;&gt;&gt;</button>
            </div>
            <div className="weekly-card week3">
              <div className="week-title">Week 3</div>
              <div className="week-desc">Building Relationships & Networking</div>
              <button className="review-btn" onClick={() => setExpandedWeek(2)}>Review &gt;&gt;&gt;</button>
            </div>
            <div className="weekly-card week4">
              <div className="week-title">Week 4</div>
              <div className="week-desc">Reflecting on your Goals & Experiences</div>
              <button className="review-btn" onClick={() => setExpandedWeek(3)}>Review &gt;&gt;&gt;</button>
            </div>
          </div>
          <div className="relationship-section">
            <div className="section-label">Grow Your Relationship</div>
            <div className="relationship-cards-row">
              <div className="relationship-card rel1">Career Growth<br /><span>Accelerate your career</span></div>
              <div className="relationship-card rel2">First laughs<br /><span>Icebreakers</span></div>
              <div className="relationship-card rel3">Future plans & dreams<br /><span>Dream big together</span></div>
              <div className="relationship-card rel3">Future plans & dreams<br /><span>Dream big together</span></div>
            </div>
          </div>
        </div>
      </div>

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
