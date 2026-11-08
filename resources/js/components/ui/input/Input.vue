<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { useVModel } from '@vueuse/core';
import { cn } from '@/lib/utils';
import type { InputVariants } from '@/components/ui/input';
import { inputVariants } from '@/components/ui/input';

const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number;
    variant?: InputVariants['variant'];
    color?: InputVariants['color'];
    size?: InputVariants['size'];
    class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <input
        v-model="modelValue"
        :class="cn(inputVariants({ variant, color, size }), props.class)"
    />
</template>
