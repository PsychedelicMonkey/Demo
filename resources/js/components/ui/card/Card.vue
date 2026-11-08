<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import type { CardVariants } from '@/components/ui/card';
import { cardVariants } from '@/components/ui/card';

const props = defineProps<{
    variant?: CardVariants['variant'];
    modifier?: CardVariants['modifier'];
    size?: CardVariants['size'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div :class="cn(cardVariants({ variant, modifier, size }), props.class)">
        <slot />
    </div>
</template>
