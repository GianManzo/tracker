<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário de criação">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <TimerComponent :timer-seconds="timerSeconds" />
          <button class="button" @click="handlePlay">
            <span class="icon">
              <font-awesome-icon icon="fa-play" class="icon" />
            </span>
            <span>PLAY</span>
          </button>
          <button class="button" @click="handleStop">
            <span class="icon">
              <font-awesome-icon icon="fa-stop" class="icon" />
            </span>
            <span>STOP</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TimerComponent from "@/shared/components/TimerComponent/TimerComponent.vue";

export default defineComponent({
  components: { TimerComponent },
  name: "FormComponent",
  data() {
    return {
      timerSeconds: 0,
      timer: 0,
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    handlePlay() {
      this.timer = setInterval(() => {
        this.timerSeconds++;
      }, 1000);
    },
    handleStop() {
      this.timerSeconds = 0;
      clearInterval(this.timer);
    },
    formatTime(seconds: number): string {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    },
  },
});
</script>

<style></style>
