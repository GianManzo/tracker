<template>
  <FormComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "../components/FormComponent/FormComponent.vue";

export default defineComponent({
  components: { FormComponent },
  name: "TaskScreen",
});
</script>

<style></style>
