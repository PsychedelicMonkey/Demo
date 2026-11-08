<script setup lang="ts">
import {cn} from "@/lib/utils";
import type {HTMLAttributes} from "vue";
import type {LoadingVariants} from "@/components/ui/loading";
import {loadingVariants} from "@/components/ui/loading";

const props = defineProps<{
    variant?: LoadingVariants['variant']
    size?: LoadingVariants['size']
    class?:HTMLAttributes['class']
}>()
</script>

<template>
    <span :class="cn(loadingVariants({variant, size}), props.class)"></span>
</template>
