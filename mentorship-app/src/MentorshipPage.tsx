import React from "react";
import { useParams } from "react-router-dom";
import MentorshipTracker from "./MentorshipTracker";
import NewMentorshipTracker from "./NewMentorshipTracker";

const existingMentors = ["Kathryne", "Iris", "Auswah"];

export default function MentorshipPage() {
  const { name } = useParams<{ name: string }>();

  // Check if this is an existing mentor or a new one
  if (name && existingMentors.includes(name)) {
    return <MentorshipTracker />;
  }

  return <NewMentorshipTracker />;
}
