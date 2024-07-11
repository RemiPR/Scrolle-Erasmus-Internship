<!--components/teacher/calendar/index.vue-->
<template>
  <div class="w-11/12">
    <TeacherCalendarHeader
      :current-date-range="currentDateRange"
      :search-query="searchQuery"
      :filters="filters"
      :active-filters="activeFilters"
      @update:search-query="searchQuery = $event"
      @toggle-filter="toggleFilter"
      @select-filter="selectFilter"
      @remove-filter="removeFilter"
      @navigate="navigate"
    />

    <TeacherCalendarGrid
      :days-in-week="daysInWeek"
      :working-hours="workingHours"
      :filtered-events="filteredEvents"
      @open-event="openEventModal"
    />

    <TeacherCalendarModal
      v-if="selectedEvent"
      :event="selectedEvent"
      @close="closeEventModal"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addWeeks,
} from "date-fns";

// Constants
const workingHours = Array.from({ length: 15 }, (_, i) => i + 7); // 07:00 to 21:00

// State
const currentDate = ref(new Date());
const searchQuery = ref("");
const activeFilters = ref({});
const selectedEvent = ref(null);
const filters = ref([]);

// Dummy data
const events = ref([
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
    date: "2024-07-08",
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
    date: "2024-07-10",
  },
  // Add more events as needed
]);

// Computed
const currentDateRange = computed(() => {
  const start = startOfWeek(currentDate.value, { weekStartsOn: 1 });
  const end = endOfWeek(currentDate.value, { weekStartsOn: 1 });
  return `${format(start, "MMMM d")} - ${format(end, "MMMM d, yyyy")}`;
});

const daysInWeek = computed(() => {
  const start = startOfWeek(currentDate.value, { weekStartsOn: 1 });
  const end = endOfWeek(currentDate.value, { weekStartsOn: 1 });
  return eachDayOfInterval({ start, end }).map((date) => ({ date }));
});

const filteredEvents = computed(() => {
  return events.value.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesFilters = Object.entries(activeFilters.value).every(
      ([key, value]) => {
        if (!value) return true;
        const filterKey = key.toLowerCase().replace(/s$/, ""); // Remove trailing 's' if present
        if (filterKey === "event type") {
          return event.eventType === value;
        }
        return event[filterKey] === value;
      }
    );
    return matchesSearch && matchesFilters;
  });
});

// Methods
const toggleFilter = (filterName) => {
  filters.value = filters.value.map((filter) =>
    filter.name === filterName ? { ...filter, isOpen: !filter.isOpen } : filter
  );
};

const selectFilter = (filterName, option) => {
  activeFilters.value = {
    ...activeFilters.value,
    [filterName]: option,
  };
  toggleFilter(filterName);
};

const removeFilter = (filterName) => {
  delete activeFilters.value[filterName];
};

const navigate = (direction) => {
  currentDate.value = addWeeks(currentDate.value, direction);
};

const openEventModal = (event) => {
  selectedEvent.value = event;
};

const closeEventModal = () => {
  selectedEvent.value = null;
};

const updateFilters = () => {
  const filterCategories = [
    { name: "Groups", key: "group", color: "blue" },
    { name: "Classrooms", key: "classroom", color: "yellow" },
    { name: "Event types", key: "eventType", color: "orange" },
    { name: "Teachers", key: "teacher", color: "green" },
  ];

  filters.value = filterCategories.map((category) => ({
    name: category.name,
    options: [
      ...new Set(events.value.map((event) => event[category.key])),
    ].sort(),
    isOpen:
      filters.value.find((f) => f.name === category.name)?.isOpen || false,
    color: category.color,
  }));
};

// Lifecycle hooks
onMounted(() => {
  updateFilters();
});

// Watch for changes in events to update filters
watch(events, updateFilters, { deep: true });
</script>
