<script setup lang="ts">
import {usePage} from "@inertiajs/vue3";
import Navbar from "@/components/Navbar.vue";

const page = usePage();
const name = page.props.name;
</script>

<template>
    <Navbar :name="name" />

    <div class="max-w-7xl mx-auto p-4 lg:p-6">
        <slot />
    </div>
</template>
