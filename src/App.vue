<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarters">
      <TaskScreen />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/modules/task/components/SideBar/SideBar.vue";
import TaskScreen from "@/modules/task/screen/Task.screen.vue";

export default defineComponent({
  name: "App",
  components: { SideBar, TaskScreen },
});
</script>
