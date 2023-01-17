<template>
  <ul class="list">
    <CardsItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script lang="ts" setup>
const { data: items } = await useBaseFetch('/list', {
  query: {
    limit: 10
  },
})
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}
</style>