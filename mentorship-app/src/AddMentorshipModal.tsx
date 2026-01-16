import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

interface AddMentorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const colors = ["#6ea8fe", "#fbbf24", "#f472b6", "#10b981", "#8b5cf6"];

export default function AddMentorshipModal({
  isOpen,
  onClose,
}: AddMentorshipModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mentorName: "",
    mentorEmail: "",
    description: "RBC WTAP",
    dashboardColour: colors[0],
    startDate: "",
    endDate: "",
    meetingFrequency: "weekly",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to new mentorship page with the mentor name
    navigate(`/mentorship/${formData.mentorName}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add Mentorship</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="mentorName">Mentor Name</label>
            <input
              id="mentorName"
              name="mentorName"
              type="text"
              placeholder="Enter mentor's name"
              value={formData.mentorName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mentorEmail">Invite Mentor: Email</label>
            <input
              id="mentorEmail"
              name="mentorEmail"
              type="email"
              placeholder="mentor@example.com"
              value={formData.mentorEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="e.g., RBC WTAP"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dashboardColour">Dashboard Colour</label>
            <div className="color-picker">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color-option ${
                    formData.dashboardColour === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      dashboardColour: color,
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="meetingFrequency">Meetings Frequency</label>
            <select
              id="meetingFrequency"
              name="meetingFrequency"
              value={formData.meetingFrequency}
              onChange={handleChange}
            >
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="modal-buttons">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Create Mentorship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
