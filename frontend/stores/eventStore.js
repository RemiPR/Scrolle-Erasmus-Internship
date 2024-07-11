// stores/eventStore.js
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: () => ({
    events: [
      {
        id: 1,
        title: "Sample Lecture",
        location: "Room 101",
        startTime: "09:00",
        endTime: "10:30",
        description: "This is a sample lecture",
        attendees: ["John Doe", "Jane Smith"],
        group: "A1",
        classroom: "101",
        eventType: "Lecture",
        teacher: "Dr. Smith",
        date: "2024-07-08", // Storing date as a string in YYYY-MM-DD format
      },
      {
        id: 2,
        title: "Lab Session",
        location: "Lab 202",
        startTime: "14:00",
        endTime: "16:00",
        description: "Practical lab session",
        attendees: ["Alice Johnson", "Bob Brown"],
        group: "B2",
        classroom: "202",
        eventType: "Lab",
        teacher: "Prof. Johnson",
        date: "2024-07-10", // Storing date as a string in YYYY-MM-DD format
      },
    ],
  }),
  actions: {
    getEventsForDay(date) {
      const targetDate = format(new Date(date), "yyyy-MM-dd");
      return this.events.filter((event) => event.date === targetDate);
    },
    addEvent(event) {
      this.events.push(event);
    },
    updateEvent(updatedEvent) {
      const index = this.events.findIndex((e) => e.id === updatedEvent.id);
      if (index !== -1) {
        this.events[index] = updatedEvent;
      }
    },
    deleteEvent(eventId) {
      this.events = this.events.filter((e) => e.id !== eventId);
    },
  },
});
