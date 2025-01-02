<script setup lang="ts">
    import { ref } from "vue";
	import Drawer from 'primevue/drawer'
	import Button from 'primevue/button'
const visibleBottom = ref(false);
</script>


<template>
  <div class="card flex justify-center">
      <Drawer v-model:visible="visibleBottom" position="bottom" header="Drawer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Drawer>
      <Button label="10월" variant="text" icon="pi pi-check" iconPos="right" @click="visibleBottom = true" />
  </div>
</template>

<style scoped></style>
