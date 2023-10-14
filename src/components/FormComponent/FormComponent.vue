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
        <section>
          <strong>00:00:00</strong>
        </section>
        <button class="button">
          <span class="icon">
            <font-awesome-icon icon="fa-play" class="icon" />
          </span>
          <span>play</span>
        </button>
        <button class="button">
          <span class="icon">
            <font-awesome-icon icon="fa-stop" class="icon" />
          </span>
          <span>stop</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormComponent",
});
</script>

<style></style>
