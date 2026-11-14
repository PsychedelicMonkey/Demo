<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import type { KbdVariants } from '@/components/ui/kbd';
import { kbdVariants } from '@/components/ui/kbd';

const props = defineProps<{
    size?: KbdVariants['size'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <kbd :class="cn(kbdVariants({ size }), props.class)">
        <slot />
    </kbd>
</template>
