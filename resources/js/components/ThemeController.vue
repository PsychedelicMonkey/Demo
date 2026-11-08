<script setup lang="ts">
import { useAppearance } from '@/composables/useAppearance';

const tabs = [
    { value: 'default', label: 'Default' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
] as const;

const { appearance, updateAppearance } = useAppearance();
</script>

<template>
    <label
        v-for="{ value, label } in tabs"
        :key="value"
        class="flex cursor-pointer items-center gap-2"
    >
        <input
            type="radio"
            name="theme-radios"
            class="theme-controller radio radio-sm"
            :value="value"
            :checked="appearance === value"
            @click="updateAppearance(value)"
        />
        {{ label }}
    </label>
</template>
