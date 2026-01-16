import { useParams } from "react-router-dom";
import "./App.css";

export default function NewMentorshipTracker() {
  const { name } = useParams<{ name: string }>();

  return (
    <div className="mentorship-tracker">
      <h1 className="main-title">Mentorship with {name}</h1>
      <div className="next-meeting-text">
        Next meeting: <span className="meeting-days">Plan Meeting 1</span>
      </div>

      <div className="main-content-row">
        <div className="main-goals-col">
          <div className="section-label">Our Main Goals</div>
          <div className="goals-cards">
            <div className="empty-state">
              <p>No goals set yet. Plan your first meeting to get started!</p>
            </div>
          </div>
        </div>
        <div className="weekly-review-col">
          <div className="section-label">Weekly Review</div>
          <div className="weekly-cards-row">
            <div
              className="weekly-card add-week-card"
              onClick={() => {}}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                background: "linear-gradient(90deg,#e0e0e0,#f5f5f5)",
              }}
            >
              +
            </div>
          </div>
          <div className="relationship-section">
            <div className="section-label">About Our Mentorship</div>
            <div className="relationship-info">
              <p>Get to know your mentor and plan your mentorship journey!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
