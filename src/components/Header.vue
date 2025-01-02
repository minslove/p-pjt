<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import Button from 'primevue/button'
</script>

<template>
    <nav>
        <RouterLink to="/"><Button class="ct-ico" icon="ico-close-header" variant="text" aria-label="" /></RouterLink>
        <h1>타이틀</h1>
    </nav>
</template>

<style scoped>

</style>
