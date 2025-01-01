<script setup lang="ts">
	import { RouterLink } from 'vue-router'
	import Button from 'primevue/button';
</script>

<template>
	<div>
		<header>
			<div class="wrapper">
				<nav>
					<Button class="ct-ico" icon="ico-close-header" variant="text" aria-label="" />
					<h1><RouterLink to="/statement">명세서</RouterLink></h1>
				</nav>
			</div>
		</header>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped>
</style>
