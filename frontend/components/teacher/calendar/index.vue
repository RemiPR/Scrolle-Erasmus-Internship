<template>
  <div class="mt-1">
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
      :key="currentWeekKey"
      :days-in-week="daysInWeek"
      :working-hours="workingHours"
      :filtered-events="filteredEvents"
      @open-event="openEventModal"
    />

    <TeacherCalendarModal
      v-if="selectedEvent"
      :event="selectedEvent"
      :isOpen="isModalOpen"
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
const filters = ref([]);

const isModalOpen = ref(false);
const selectedEvent = ref(null);
const currentWeekKey = computed(() =>
  currentDate.value.toISOString().slice(0, 10)
);
// Dummy data
const events = ref([
  {
    id: 1,
    title: "Advanced Aesthetics Cosmetology",
    startTime: "09:00",
    endTime: "10:30",
    description: "Introduction lecture to Advanced Aesthetics Cosmetelogy",
    group: "C13",
    classroom: "Aud. 101",
    eventType: "Lecture",
    teacher: "Dr. Smith",
    date: "2024-07-19",
  },
  {
    id: 2,
    title: "Advanced Aesthetics Cosmetology",
    startTime: "10:45",
    endTime: "12:15",
    description: "Lecture on advanced cosmetology techniques",
    group: "C13",
    classroom: "Aud. 101",
    eventType: "Lecture",
    teacher: "Dr. Smith",
    date: "2024-07-19",
  },
  {
    id: 3,
    title: "Hair Styling Workshop",
    startTime: "13:00",
    endTime: "15:00",
    description: "Hands-on workshop on hair styling techniques",
    group: "C13",
    classroom: "Salon Room",
    eventType: "Workshop",
    teacher: "Ms. Johnson",
    date: "2024-07-18",
  },
  {
    id: 4,
    title: "Makeup Masterclass",
    startTime: "15:30",
    endTime: "17:00",
    description: "Masterclass on makeup application and techniques",
    group: "C13",
    classroom: "Aud. 201",
    eventType: "Masterclass",
    teacher: "Ms. Anderson",
    date: "2024-07-18",
  },
  {
    id: 5,
    title: "Math",
    startTime: "09:00",
    endTime: "10:30",
    description: "Lecture on Math",
    group: "C13",
    classroom: "Aud. 201",
    eventType: "Exam",
    teacher: "Dr. Johnson",
    date: "2024-07-15",
  },
  {
    id: 6,
    title: "Physics",
    startTime: "10:45",
    endTime: "12:15",
    description: "Lecture on Physics",
    group: "C13",
    classroom: "Aud. 201",
    eventType: "Test",
    teacher: "Dr. Anderson",
    date: "2024-07-17",
  },
  {
    id: 7,
    title: "Chemistry",
    startTime: "13:00",
    endTime: "14:30",
    description: "Lecture on Chemistry",
    group: "C13",
    classroom: "Aud. 301",
    eventType: "Lecture",
    teacher: "Dr. Smith",
    date: "2024-07-15",
  },
  {
    id: 8,
    title: "Biology",
    startTime: "14:45",
    endTime: "16:15",
    description: "Lecture on Biology",
    group: "C13",
    classroom: "Aud. 401",
    eventType: "Lecture",
    teacher: "Dr. Johnson",
    date: "2024-07-15",
  },
  {
    id: 9,
    title: "History",
    startTime: "09:00",
    endTime: "10:30",
    description: "Lecture on History",
    group: "C13",
    classroom: "Aud. 401",
    eventType: "Lecture",
    teacher: "Dr. Anderson",
    date: "2024-07-16",
  },
  {
    id: 10,
    title: "Geography",
    startTime: "10:45",
    endTime: "12:15",
    description: "Lecture on Geography",
    group: "C13",
    classroom: "Aud. 401",
    eventType: "Lecture",
    teacher: "Dr. Smith",
    date: "2024-07-17",
  },
  {
    id: 11,
    title: "English",
    startTime: "13:00",
    endTime: "14:30",
    description: "Lecture on English",
    group: "C13",
    classroom: "Aud. 201",
    eventType: "Lecture",
    teacher: "Dr. Johnson",
    date: "2024-07-16",
  },
  {
    id: 12,
    title: "Computer Science",
    startTime: "14:45",
    endTime: "16:15",
    description: "Lecture on Computer Science",
    group: "C13",
    classroom: "Remote",
    eventType: "Lecture",
    teacher: "Dr. Anderson",
    date: "2024-07-16",
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
    const searchFields = [
      "title",
      "description",
      "group",
      "classroom",
      "eventType",
      "teacher",
      "date",
      "startTime",
      "endTime",
    ];

    const matchesSearch = searchFields.some((field) =>
      event[field]
        .toString()
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    );

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
  nextTick(() => {
    isModalOpen.value = true;
  });
};

const closeEventModal = () => {
  isModalOpen.value = false;
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
