<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import type { AuraVariants } from '@/components/ui/aura';
import { auraVariants } from '@/components/ui/aura';

const props = defineProps<{
    variant?: AuraVariants['variant'];
    size?: AuraVariants['size'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div :class="cn(auraVariants({ variant, size }), props.class)">
        <slot />
    </div>
</template>
