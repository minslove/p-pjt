<script setup lang="ts">
    import Divider from 'primevue/divider';
    import SubTitle from '../components/SubTitle.vue';
    import UsageHistory from '../components/UsageHistory.vue';
    import ButtonWrap from '../components/ButtonWrap.vue';


</script>

<template>
	<div>

    <Divider class="ct-divider d-type1 mt40" />

    <SubTitle><template #subTitle>이용내역</template></SubTitle>

		<UsageHistory />
		<ButtonWrap><template #buttonLabel>더보기</template></ButtonWrap>

    <Divider class="ct-divider d-type1 mt40" />

    <SubTitle><template #subTitle>취소매출 이용내역</template></SubTitle>
		<UsageHistory />
	</div>
</template>

<style scoped></style>
