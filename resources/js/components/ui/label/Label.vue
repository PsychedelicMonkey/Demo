<script setup lang="ts">
import {cn} from "@/lib/utils";
import type {HTMLAttributes} from "vue";

const props = defineProps<{
    class?:HTMLAttributes['class']
}>()
</script>

<template>
    <label :class="cn('label', props.class)">
        <slot />
    </label>
</template>
