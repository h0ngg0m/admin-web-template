<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Separator } from '@/component/shadcn/ui/separator'
import { cn } from '@/util/shadcn.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator data-sidebar="separator" :class="cn('mx-2 w-auto bg-sidebar-border', props.class)">
    <slot />
  </Separator>
</template>
