<template>
  <section>
    <strong>{{ formattedTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimerComponent",
  methods: {
    formatTime(seconds: number): string {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    },
  },
  props: {
    timerSeconds: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    formattedTime(): string {
      return this.formatTime(this.timerSeconds);
    },
  },
});
</script>
