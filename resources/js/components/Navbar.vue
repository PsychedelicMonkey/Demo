<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/vue3';
import { home } from '@/routes';

defineProps<{
    name: string;
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
            <div class="dropdown dropdown-end">
                <div
                    tabindex="0"
                    role="button"
                    class="btn avatar btn-circle btn-ghost"
                >
                    <div class="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </div>
                </div>
                <ul
                    tabindex="-1"
                    class="menu dropdown-content z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
                >
                    <li>
                        <a class="justify-between">
                            Profile
                            <Badge>New</Badge>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
