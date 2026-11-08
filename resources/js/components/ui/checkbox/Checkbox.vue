<script setup lang="ts">
import {cn} from "@/lib/utils";
import type {HTMLAttributes} from "vue";
import type {CheckboxVariants} from "@/components/ui/checkbox";
import {checkboxVariants} from "@/components/ui/checkbox";

const props = defineProps<{
    color?:CheckboxVariants['color']
    size?:CheckboxVariants['size']
    class?:HTMLAttributes['class']
}>()
</script>

<template>
    <input type="checkbox" :class="cn(checkboxVariants({color, size}), props.class)" />
</template>
