<template>
  <div class="use-history">
    <div class="left">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <ul class="items">
        <slot name="content"></slot>
      </ul>
    </div>
    <div class="right">
      <h3>
        <slot name="price"></slot>원
      </h3>
      <ul class="items">
        <slot name="usage"></slot>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
