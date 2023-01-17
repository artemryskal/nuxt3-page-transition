<template>
  <li class="item">
    <NuxtLink class="item__link">
      <img :src="item.download_url" :alt="`${item.author} picture`" class="item__image">
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import ICard from '~/intefaces/ICard'

interface Props {
  item: ICard
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.item {
  &__image {
    border-radius: 10px;
  }
}
</style>