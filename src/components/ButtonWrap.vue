<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <div class="w-full button-group mt20">
    <Button variant="outlined" severity="secondary"><slot name="buttonLabel"></slot></Button>
  </div>
</template>

<style scoped></style>
