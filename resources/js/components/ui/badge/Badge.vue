<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import type { BadgeVariants } from '@/components/ui/badge';
import { badgeVariants } from '@/components/ui/badge';

const props = defineProps<{
    variant?: BadgeVariants['variant'];
    color?: BadgeVariants['color'];
    size?: BadgeVariants['size'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span :class="cn(badgeVariants({ variant, color, size }), props.class)">
        <slot />
    </span>
</template>
