<script setup lang="ts">
defineProps<{
  /**
   * The label of the button
   */
  label?: string;
}>();
</script>

<template>
  <v-btn color="primary"
    ><slot>{{ label ?? "Example" }}</slot></v-btn
  >
</template>
