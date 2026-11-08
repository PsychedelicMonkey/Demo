<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {cn} from "@/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <fieldset :class="cn('fieldset', props.class)">
        <slot />
    </fieldset>
</template>
