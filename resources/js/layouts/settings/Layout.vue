<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
    { title: 'Profile', href: editProfile() },
    { title: 'Security', href: editSecurity() },
    { title: 'Appearance', href: editAppearance() },
];

const { isCurrentOrParentUrl } = useCurrentUrl();
</script>

<template>
    <ul class="menu menu-horizontal">
        <li v-for="{ title, href } in navItems" :key="title">
            <Link
                :href="href"
                :class="{ 'menu-active': isCurrentOrParentUrl(href) }"
            >
                {{ title }}
            </Link>
        </li>
    </ul>

    <slot />
</template>
