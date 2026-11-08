<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { home, login, register } from '@/routes';
import type { User } from '@/types';
import UserDropdown from '@/components/UserDropdown.vue';

defineProps<{
    name: string;
    user?: User;
}>();
</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <Link :href="home()" class="btn btn-ghost text-xl">{{ name }}</Link>
        </div>
        <div class="flex gap-2">
            <input
                type="text"
                placeholder="Search"
                class="input w-24 md:w-auto"
            />
            <UserDropdown v-if="user" :user="user" />
            <div v-else class="flex gap-2">
                <Link :href="login()" class="btn btn-neutral">Login</Link>
                <Link :href="register()" class="btn btn-primary">Register</Link>
            </div>
        </div>
    </div>
</template>
