<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import Navbar from '@/components/Navbar.vue';
import { computed } from 'vue';
import { Toaster } from '@/components/ui/sonner';

const page = usePage();
const name = page.props.name;
const user = computed(() => page.props.auth.user);
</script>

<template>
    <Navbar :name="name" :user="user" />

    <div class="mx-auto max-w-7xl p-4 lg:p-6">
        <slot />
    </div>
    <Toaster />
</template>
