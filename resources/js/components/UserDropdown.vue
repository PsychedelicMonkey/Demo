<script setup lang="ts">
import type { User } from '@/types';
import { logout } from '@/routes';
import { Badge } from '@/components/ui/badge';
import { Link, router } from '@inertiajs/vue3';

defineProps<{
    user: User;
}>();

const handleLogout = () => {
    router.flushAll();
};
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn avatar btn-circle btn-ghost">
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
            <li>
                <Link :href="logout()" @click="handleLogout" as="button">
                    Logout
                </Link>
            </li>
        </ul>
    </div>
</template>
