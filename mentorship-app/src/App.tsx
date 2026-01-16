import MentorshipTracker from "./MentorshipTracker";
import "./App.css";
import { useMeetings } from './NextMeeting.tsx'

function App() {
  return <MentorshipTracker />;
  const { meetings } = useMeetings()
  const now = new Date()

  const nextMeeting = meetings
    .map(m => ({ ...m, dateObj: new Date(m.date) }))
    .filter(m => m.dateObj > now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())[0]

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
      <div className="header">
        <h1>Hi Ivy,</h1>
        <h3>
          {hasNextMeeting ? (
            <>
              Your next meeting is{" "}
              <strong>{dayText}</strong> with{" "}
              <strong>{nextMeeting.with}</strong>
            </>
          ) : (
            "No upcoming meetings yet!"
          )}
        </h3>
      </div>
      
      <div className="mentorship-pages">
        <h2>My Mentorships</h2>

        <div className="mentorship-grid">
          <button className="mentorship-add">+</button>

          <a className="mentorship-card blue" href="/RBC_WTAP_Kathryne">
            <span className="badge">3 days</span>
            <p className="org">RBC WTAP</p>
            <h3>Kathryne</h3>
          </a>

          <a className="mentorship-card orange" href="/RBC_WTAP_Iris">
            <span className="badge">7 days</span>
            <p className="org">RBC WTAP</p>
            <h3>Iris</h3>
          </a>

          <a className="mentorship-card pink" href="/RBC_WTAP_Auswah">
            <span className="badge">8 days</span>
            <p className="org">RBC WTAP</p>
            <h3>Auswah</h3>
          </a>
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
  )
}

export default App
