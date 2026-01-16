import "./App.css";
import "./index.css"
import { useState } from "react"
import { useMeetings } from './NextMeeting.tsx'
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import MentorshipPage from "./MentorshipPage"
import AddMentorshipModal from "./AddMentorshipModal"
import genericPfp from './assets/generic_pfp.jpg'

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1']

function App() {
  const { meetings } = useMeetings()
  const [showAddMentorshipModal, setShowAddMentorshipModal] = useState(false)
  const now = new Date()

  const nextMeeting = meetings
    .map(m => ({ ...m, dateObj: new Date(m.date) }))
    .filter(m => m.dateObj > now)[0]

  const hasNextMeeting = Boolean(nextMeeting)

  let dayText: string | null = null

  if (hasNextMeeting && nextMeeting) {
    const daysUntil = Math.ceil(
      (nextMeeting.dateObj.getTime() - now.getTime()) /
        (1000 * 60 * 60 * 24)
    )

    dayText =
      daysUntil === 0
        ? "today"
        : daysUntil === 1
        ? "tomorrow"
        : `in ${daysUntil} days`
  }


  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className="header">
              <h1>Hi Ivy,</h1>
              <h3>
                {hasNextMeeting ? (
                  <>
                    Your next meeting is{" "}
                    <strong>{dayText}</strong> with{" "}
                    <strong>{nextMeeting?.with}</strong>
                  </>
                ) : (
                  "No upcoming meetings yet!"
                )}
              </h3>
            </div>
        
        <div className="mentorship-pages">
          <h2>My Mentorships</h2>

          <div className="mentorship-grid">
            <button className="mentorship-add" onClick={() => setShowAddMentorshipModal(true)}>+</button>

            <Link to="/mentorship/Kathryne" className="mentorship-card blue">
              <span className="badge">3 days</span>
              <div className="pfp-overlay">
                <img src={genericPfp} alt="pfp1" className="pfp pfp-1" />
                <div className="pfp pfp-2" style={{ backgroundColor: colors[0] }}></div>
              </div>
              <p className="org">RBC WTAP</p>
              <h3>Kathryne</h3>
            </Link>

            <Link to="/mentorship/Iris" className="mentorship-card orange">
              <span className="badge">7 days</span>
              <div className="pfp-overlay">
                <img src={genericPfp} alt="pfp1" className="pfp pfp-1" />
                <div className="pfp pfp-2" style={{ backgroundColor: colors[1] }}></div>
              </div>
              <p className="org">RBC WTAP</p>
              <h3>Iris</h3>
            </Link>

            <Link to="/mentorship/Auswah" className="mentorship-card pink">
              <span className="badge">8 days</span>
              <div className="pfp-overlay">
                <img src={genericPfp} alt="pfp1" className="pfp pfp-1" />
                <div className="pfp pfp-2" style={{ backgroundColor: colors[2] }}></div>
              </div>
              <p className="org">RBC WTAP</p>
              <h3>Auswah</h3>
            </Link>
          </div>
        </div>

        <div className="resource-pages">
          <h2>Resources</h2>

          <div className="resource-grid">
            <div className="resource-card">
              <span className="resource-tag">In 3 days</span>
              <h3>Upcoming meeting with Kathryne</h3>
            </div>

            <div className="resource-card">
              <span className="resource-tag">Generated 1/3</span>
              <h3>New meeting spots in Toronto</h3>
            </div>

            <div className="resource-card faded">
              <span className="resource-tag">1 day ago</span>
              <h3>Upcoming meeting with Auswah</h3>
            </div>
          </div>
        </div>
      </>
    } />

    <Route
      path="/mentorship/:name"
      element={<MentorshipPage />}
    />

    <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      <AddMentorshipModal 
        isOpen={showAddMentorshipModal}
        onClose={() => setShowAddMentorshipModal(false)}
      />
    </>
  )}

export default App
