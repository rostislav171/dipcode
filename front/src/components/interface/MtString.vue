<template>
  <q-input :label="label" />
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps(['label'])

console.log(props.label)
</script>
