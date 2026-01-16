import { useState } from "react";
import "./App.css";

const initialWeeks = [
  {
    week: "Week 1",
    desc: "Getting Started + Goal Setting",
    notes: "Kickoff meeting. Set mentorship goals: improve communication, complete milestone 1, expand network. Discussed expectations and agreed on weekly check-ins."
  },
  {
    week: "Week 2",
    desc: "Working at RBC & Making Good Impressions",
    notes: "Reviewed progress on milestone 1. Noted challenges with time management. Shared resources for productivity. Scheduled next session."
  },
  {
    week: "Week 3",
    desc: "Building Relationships & Networking",
    notes: "Practiced communication skills in a mock interview. Feedback given. Discussed networking strategies and upcoming events."
  }
];

export default function MentorshipTracker() {
  const [weeks, setWeeks] = useState(initialWeeks);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWeekTitle, setNewWeekTitle] = useState("");
  const [newWeekDesc, setNewWeekDesc] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState(null);

  const relationshipTopics = {
    0: {
      title: "Career Growth",
      subtitle: "Accelerate your career",
      questions: [
        "What skills should I focus on developing for my next career step?",
        "How did you navigate your career transitions?",
        "What opportunities should I be looking for at this stage?",
        "How can I position myself for advancement?",
        "What mistakes should I avoid in my career path?"
      ]
    },
    1: {
      title: "First laughs",
      subtitle: "Icebreakers",
      questions: [
        "What's the funniest thing that's happened to you at work?",
        "If you could have any superpower for work, what would it be?",
        "What's your go-to productivity hack?",
        "What's a skill you wish you had learned earlier?",
        "What's your favorite thing about your job?"
      ]
    },
    2: {
      title: "Future plans & dreams",
      subtitle: "Dream big together",
      questions: [
        "Where do you see yourself in 5-10 years?",
        "What's a professional goal you're currently working toward?",
        "What impact do you want to make in your field?",
        "What's something you've always wanted to try in your career?",
        "How do you balance ambition with other life priorities?"
      ]
    },
    3: {
      title: "Future plans & dreams",
      subtitle: "Dream big together",
      questions: [
        "What's your vision for success in this role?",
        "How do you want to grow personally through this mentorship?",
        "What legacy do you want to leave in your career?",
        "What would make this mentorship incredibly valuable for you?",
        "What are you most excited to learn or explore?"
      ]
    }
  };

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
          </div>
        </div>
        <div className="weekly-review-col">
          <div className="section-label">Weekly Review</div>
          <div className="weekly-cards-row">
            {weeks.map((w, idx) => (
              <div className={`weekly-card week${idx+1}`} key={w.week}>
                <div className="week-title">{w.week}</div>
                <div className="week-desc">{w.desc}</div>
                <button className="review-btn" onClick={() => setExpandedWeek(idx)}>Review &gt;&gt;&gt;</button>
              </div>
            ))}
            <div className="weekly-card add-week-card" onClick={() => setShowAddModal(true)} style={{cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',fontWeight:'bold',background:'linear-gradient(90deg,#e0e0e0,#f5f5f5)'}}>
              +
            </div>
          </div>
          <div className="relationship-section">
            <div className="section-label">Grow Your Relationship</div>
            <div className="relationship-cards-row">
              <div className="relationship-card rel1" onClick={() => setSelectedRelationship(0)} style={{cursor:'pointer'}}>Career Growth<br /><span>Accelerate your career</span></div>
              <div className="relationship-card rel2" onClick={() => setSelectedRelationship(1)} style={{cursor:'pointer'}}>First laughs<br /><span>Icebreakers</span></div>
              <div className="relationship-card rel3" onClick={() => setSelectedRelationship(2)} style={{cursor:'pointer'}}>Future plans & dreams<br /><span>Dream big together</span></div>
              <div className="relationship-card rel3" onClick={() => setSelectedRelationship(3)} style={{cursor:'pointer'}}>Future plans & dreams<br /><span>Dream big together</span></div>
            </div>
          </div>
        </div>
      </div>

      {expandedWeek !== null && (
        <div className="modal-overlay" onClick={() => setExpandedWeek(null)}>
          <div className="modal-content week-modal" onClick={e => e.stopPropagation()}>
            <div className="week-modal-header">
              <h2>{weeks[expandedWeek].week}: {weeks[expandedWeek].desc}</h2>
              <div className="completion-status">Completion Status: <span className="status-completed">Completed</span></div>
            </div>
            <div className="week-modal-body">
              <div className="goals-accomplished-col">
                <div className="goals-accomplished-title">Goals Accomplished</div>
                <div className="goals-accomplished-list">
                  <div className="goal-accomplished-card"> <b>Self Awareness</b><br/>Clarify personal interests, values, and experiences that shape your professional identity</div>
                  <div className="goal-accomplished-card"> <b>Career direction</b><br/>Define career aspirations and what matters most in a future role.</div>
                  <div className="goal-accomplished-card"> <b>Skill development</b><br/>Identify and build the skills, experiences, and habits needed to achieve these goals.</div>
                  <div className="goal-accomplished-card"> <b>Mentor Support</b><br/>Establish how your mentor can best support your growth and progress throughout the program.</div>
                  <div className="goal-accomplished-card"> <b>Program Success</b><br/>Set 2–3 clear goals for the program and define what success looks like by the end</div>
                </div>
              </div>
              <div className="week-modal-right-col">
                <div className="self-rating-label">Self-Rating</div>
                <div className="self-rating-slider-row">
                  <input type="range" min="1" max="5" defaultValue="4" className="self-rating-slider" />
                </div>
                <div className="reflection-summary-label">Reflection Summary</div>
                <div className="reflection-summary-box"></div>
              </div>
            </div>
            <button onClick={() => setExpandedWeek(null)} style={{ marginTop: "1.5rem" }}>Close</button>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content add-week-modal" onClick={e => e.stopPropagation()}>
            <h2>Add New Weekly Page</h2>
            <form onSubmit={e => {
              e.preventDefault();
              if (!newWeekTitle.trim()) return;
              setWeeks([...weeks, {
                week: `Week ${weeks.length + 1}`,
                desc: newWeekTitle,
                notes: newWeekDesc
              }]);
              setNewWeekTitle("");
              setNewWeekDesc("");
              setShowAddModal(false);
            }}>
              <div style={{marginBottom:'1rem'}}>
                <label>Title/Description:<br/>
                  <input type="text" value={newWeekTitle} onChange={e => setNewWeekTitle(e.target.value)} style={{width:'100%',padding:'0.5rem',fontSize:'1rem',marginTop:'0.3rem'}} required />
                </label>
              </div>
              <div style={{marginBottom:'1rem'}}>
                <label>Notes (optional):<br/>
                  <textarea value={newWeekDesc} onChange={e => setNewWeekDesc(e.target.value)} style={{width:'100%',padding:'0.5rem',fontSize:'1rem',marginTop:'0.3rem'}} rows={3} />
                </label>
              </div>
              <button type="submit" style={{marginRight:'1rem'}}>Add Week</button>
              <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {selectedRelationship !== null && (
        <div className="modal-overlay" onClick={() => setSelectedRelationship(null)}>
          <div className="modal-content relationship-modal" onClick={e => e.stopPropagation()}>
            <h2>{relationshipTopics[selectedRelationship].title}</h2>
            <p style={{color:'#666',marginBottom:'1.5rem'}}>{relationshipTopics[selectedRelationship].subtitle}</p>
            <div style={{marginBottom:'1rem',fontWeight:'bold',fontSize:'1.1rem'}}>Questions you can ask your mentor:</div>
            <ul style={{listStyle:'none',padding:0}}>
              {relationshipTopics[selectedRelationship].questions.map((q, idx) => (
                <li key={idx} style={{padding:'0.75rem',marginBottom:'0.5rem',background:'#f5f5f5',borderRadius:'8px',borderLeft:'4px solid #4a90e2'}}>
                  {q}
                </li>
              ))}
            </ul>
            <button onClick={() => setSelectedRelationship(null)} style={{marginTop:'1rem'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}