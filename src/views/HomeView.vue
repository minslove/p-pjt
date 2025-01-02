<script setup lang="ts">
import { RouterLink } from 'vue-router'
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <ul>
    <li><RouterLink to="/statement">카드값명세서</RouterLink></li>
    <li><RouterLink to="/">교통카드 이용내역</RouterLink></li>
    <li><RouterLink to="/">이용내역</RouterLink></li>
    <li><RouterLink to="/">카드 관리 - 간편결제 등록</RouterLink></li>
    <li><RouterLink to="/">카드 배송현황 조회 - 배송중</RouterLink></li>
    <li><RouterLink to="/">약관 동의</RouterLink></li>
  </ul>
</template>

<style scoped>
ul li {
  margin: 1rem 2rem;
}
ul li a {
  font-size: 2rem;
  font-weight: 700;
}
</style>
