<script setup lang="ts" generic="T">
import { useKeyOf, type KeyOfInput } from '../composables/use-key-of';

export interface AllProps<T> {
  items?: T[];
  keyOf?: KeyOfInput<T>;
}

const props = defineProps<AllProps<T>>();
const keyOf = useKeyOf(props);
</script>

<template>
  <div>
    <template v-for="(item, _index) in props.items" :key="keyOf(item, _index)">
      <slot name="item" :item="item" :item-key="keyOf(item, _index)" />
    </template>
  </div>
</template>
