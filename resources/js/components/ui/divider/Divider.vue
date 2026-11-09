<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import type { DividerVariants } from '@/components/ui/divider';
import { dividerVariants } from '@/components/ui/divider';

const props = defineProps<{
    color?: DividerVariants['color'];
    direction?: DividerVariants['direction'];
    placement?: DividerVariants['placement'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div
        :class="
            cn(dividerVariants({ color, direction, placement }), props.class)
        "
    >
        <slot />
    </div>
</template>
