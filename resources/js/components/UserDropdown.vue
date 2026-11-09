<script setup lang="ts">
import type { NavItem, User } from '@/types';
import { logout } from '@/routes';
import { Badge } from '@/components/ui/badge';
import { Divider } from '@/components/ui/divider';
import { Link, router } from '@inertiajs/vue3';
import { useInitials } from '@/composables/useInitials';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import { edit as editAppearance } from '@/routes/appearance';
import { useCurrentUrl } from '@/composables/useCurrentUrl';

const navItems: NavItem[] = [
    { title: 'Profile', href: editProfile() },
    { title: 'Security', href: editSecurity() },
    { title: 'Appearance', href: editAppearance() },
];

defineProps<{
    user: User;
}>();

const handleLogout = () => {
    router.flushAll();
};

const { isCurrentUrl } = useCurrentUrl();
const { getInitials } = useInitials();
</script>

<template>
    <div class="dropdown dropdown-end">
        <div
            tabindex="0"
            role="button"
            class="btn avatar avatar-placeholder btn-circle btn-ghost"
        >
            <div class="w-10 rounded-full bg-neutral text-neutral-content">
                <span>{{ getInitials(user.name) }}</span>
            </div>
        </div>
        <div
            tabindex="-1"
            class="dropdown-content z-1 mt-3 w-52 rounded-box bg-base-200 shadow"
        >
            <div class="p-2 pb-0 text-center">
                <div class="avatar avatar-placeholder">
                    <div
                        class="w-24 rounded-full bg-neutral text-neutral-content"
                    >
                        <span class="text-3xl">
                            {{ getInitials(user.name) }}
                        </span>
                    </div>
                </div>

                <div class="mt-2">
                    <div class="text-lg font-medium">{{ user.name }}</div>
                    <div class="text-sm font-light">{{ user.email }}</div>
                </div>

                <Divider />
            </div>

            <ul class="menu w-full menu-sm p-2 pt-0">
                <li>
                    <a class="justify-between">
                        Profile
                        <Badge>New</Badge>
                    </a>
                </li>
                <li>
                    <details>
                        <summary>Settings</summary>
                        <ul>
                            <li v-for="{ title, href } in navItems" :key="title">
                                <Link
                                    :href="href"
                                    :class="{
                                        'menu-active': isCurrentUrl(href),
                                    }"
                                >
                                    {{ title }}
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link :href="logout()" @click="handleLogout" as="button">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</template>
