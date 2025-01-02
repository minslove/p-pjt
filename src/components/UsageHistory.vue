<script setup lang="ts">
    import HistoryList from './HistoryList.vue'
</script>

<template>
	<HistoryList>
		<template #heading>결제내역명</template>
		<template #content>
			<li><span>2025.01.01</span></li>
		</template>
		<template #price>24,000</template>
	</HistoryList>

	<HistoryList>
		<template #heading>연회비</template>
		<template #content>
			<li><span>2025.01.01</span></li>
			<li><span>면제</span></li>
		</template>
		<template #price>24,000</template>
	</HistoryList>

	<HistoryList>
		<template #heading>가맹점명</template>
		<template #content>
			<li><span>2025.01.01</span></li>
			<li><span>할부(1/3)</span></li>
			<li><span>수수료1,000원</span></li>
		</template>
		<template #price>24,000</template>
	</HistoryList>

	<HistoryList>
		<template #heading>가맹점명</template>
		<template #content>
			<li><span>2025.01.01</span></li>
			<li><span>전체취소</span></li>
		</template>
		<template #price>24,000</template>
		<template #usage>
			<li>
				<span>이용금액</span>
				<span>24,000원</span>
			</li>
		</template>
	</HistoryList>

	<HistoryList>
		<template #heading>가맹점명</template>
		<template #content>
			<li><span>2025.01.01</span></li>
			<li><span>할부(1/3)</span></li>
			<li><span>수수료1,000원</span></li>
		</template>
		<template #price>24,000</template>
		<template #usage>
			<li>
				<span>취소금액</span>
				<span>-24,000원</span>
			</li>
		</template>
	</HistoryList>

	<HistoryList>
		<template #heading>가맹점명가맹점명가맹점명가맹점명가맹점명가맹점명가맹점명</template>
		<template #content>
			<li><span>2025.01.01</span></li>
			<li><span>할부(1/3)</span></li>
			<li><span>수수료1,000원</span></li>
		</template>
		<template #price>24,000</template>
		<template #usage>
			<li>
				<span>바로낸 금액</span>
				<span>-24,000원</span>
			</li>
		</template>
	</HistoryList>
</template>
