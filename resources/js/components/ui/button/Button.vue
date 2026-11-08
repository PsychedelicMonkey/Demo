<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import type { ButtonVariants } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';

const props = defineProps<{
    color?: ButtonVariants['color'];
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    modifier?: ButtonVariants['modifier'];
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <button
        :class="
            cn(buttonVariants({ color, variant, size, modifier }), props.class)
        "
    >
        <slot />
    </button>
</template>
