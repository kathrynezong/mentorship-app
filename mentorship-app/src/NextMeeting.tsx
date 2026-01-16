import React, { createContext, useContext, useState } from "react"

export type Meeting = {
  id: string
  date: string
  with: string
}

type MeetingsContextType = {
  meetings: Meeting[]
  setMeetings: React.Dispatch<React.SetStateAction<Meeting[]>>
}

const MeetingsContext = createContext<MeetingsContextType | undefined>(undefined)

export function MeetingsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [meetings, setMeetings] = useState<Meeting[]>([])

  return (
    <MeetingsContext.Provider value={{ meetings, setMeetings }}>
      {children}
    </MeetingsContext.Provider>
  )
}

export function useMeetings() {
  const context = useContext(MeetingsContext)

  if (!context) {
    throw new Error("useMeetings must be used within a MeetingsProvider")
  }

  return context
}