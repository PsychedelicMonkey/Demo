<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import type { AlertVariants } from '@/components/ui/alert';
import { alertVariants } from '@/components/ui/alert';

const props = defineProps<{
    variant?: AlertVariants['variant'];
    color?: AlertVariants['color'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div
        role="alert"
        :class="cn(alertVariants({ variant, color }), props.class)"
    >
        <slot />
    </div>
</template>
