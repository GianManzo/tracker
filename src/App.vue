<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarters">
      <FormComponent name="play" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { handleComponents } from "@/shared/components/handleComponents";
const { SideBar, FormComponent } = handleComponents();

export default defineComponent({
  name: "App",
  components: { SideBar, FormComponent },
});
</script>
