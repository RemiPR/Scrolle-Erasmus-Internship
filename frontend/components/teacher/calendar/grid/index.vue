<!--components/teacher/calendar/grid/index.vue-->
<template>
  <div class="grid grid-cols-[100px_repeat(7,1fr)] gap-0.5 border text-sm">
    <!-- Time column -->
    <div class="border-r">
      <div class="h-12 border-b"></div>
      <div
        v-for="hour in workingHours"
        :key="hour"
        class="h-16 border-t flex items-center justify-end pr-2 text-gray-600"
      >
        {{ formatHour(hour) }}
      </div>
    </div>

    <!-- Days columns -->
    <TransitionGroup name="day-column" tag="div" class="contents">
      <div v-for="day in daysInWeek" :key="day.date" class="border-r">
        <Transition name="day-header" mode="out-in">
          <div
            :key="day.date"
            class="h-12 font-bold text-center border-b flex items-center justify-center bg-gray-100"
          >
            {{ formatDate(day.date) }}
          </div>
        </Transition>
        <div class="relative" style="height: calc(14 * 64px)">
          <TransitionGroup
            name="event"
            tag="div"
            class="relative"
            style="height: 100%"
          >
            <div
              v-for="event in filteredEventsForDay(day.date)"
              :key="event.id"
              :style="getEventStyle(event)"
              @click="$emit('open-event', event)"
              class="absolute w-full bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
              ref="eventCard"
              :data-event-id="event.id"
            >
              <!-- Events -->
              <div class="p-2 flex flex-col h-full">
                <div class="flex-grow">
                  <div class="flex justify-between items-start mb-1">
                    <h3 class="font-semibold text-sm line-clamp-2 flex-grow">
                      {{ event.title }}
                    </h3>
                    <span
                      class="text-sm font-medium px-1.5 py-0.5 rounded-full ml-1 whitespace-nowrap"
                      :class="getTagClass('eventType', event.eventType)"
                    >
                      {{ event.eventType }}
                    </span>
                  </div>
                  <p
                    v-if="isCardTallEnough(event.id)"
                    class="text-gray-600 text-xs"
                  >
                    {{ event.teacher }}
                  </p>
                </div>
                <div class="mt-auto">
                  <div class="text-gray-700 text-xs font-semibold mb-1">
                    {{ formatTime(event.startTime) }} -
                    {{ formatTime(event.endTime) }}
                  </div>
                  <div class="flex gap-1 flex-wrap">
                    <span
                      v-for="tag in ['classroom', 'group']"
                      :key="tag"
                      class="px-2 py-0.5 rounded-full text-xs font-medium truncate"
                      :class="getTagClass(tag, event[tag])"
                    >
                      {{ event[tag] }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { format } from "date-fns";

const props = defineProps({
  daysInWeek: Array,
  workingHours: Array,
  filteredEvents: Array,
});

const emit = defineEmits(["open-event"]);

const eventCard = ref(null);
const cardHeights = ref({});

onMounted(() => {
  nextTick(() => {
    if (eventCard.value) {
      eventCard.value.forEach((card) => {
        const eventId = card.getAttribute("data-event-id");
        cardHeights.value[eventId] = card.offsetHeight;
      });
    }
  });
});

const isCardTallEnough = (eventId) => {
  return cardHeights.value[eventId] >= 125;
};

const formatDate = (date) => format(date, "EEE, MMM d");
const formatTime = (time) => time;
const formatHour = (hour) =>
  format(new Date().setHours(hour, 0, 0, 0), "HH:mm");

const getEventStyle = (event) => {
  const startMinutes = parseTime(event.startTime) - 7 * 60; // Adjust for 7:00 start
  const endMinutes = parseTime(event.endTime) - 7 * 60;
  const totalMinutes = 14 * 60; // 14 hours (7:00 to 21:00)
  const top = (startMinutes / totalMinutes) * 896; // 896px is the total height (14 * 64px)
  const height = ((endMinutes - startMinutes) / totalMinutes) * 896;
  return {
    top: `${top}px`,
    height: `${height}px`,
  };
};

const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};

const filteredEventsForDay = (date) => {
  const targetDate = format(date, "yyyy-MM-dd");
  return props.filteredEvents.filter((event) => event.date === targetDate);
};

const getTagClass = (type, value) => {
  const colorMap = {
    classroom: "bg-yellow-100 text-yellow-800",
    eventType: "bg-orange-100 text-orange-800",
    group: "bg-blue-100 text-blue-800",
  };
  return colorMap[type] || "bg-gray-100 text-gray-800";
};
</script>
