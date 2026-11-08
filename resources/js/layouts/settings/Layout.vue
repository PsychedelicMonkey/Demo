<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import { useCurrentUrl } from '@/composables/useCurrentUrl';

const { isCurrentOrParentUrl } = useCurrentUrl();
</script>

<template>
    <ul class="menu menu-horizontal">
        <li>
            <Link
                :href="editProfile()"
                :class="{ 'menu-active': isCurrentOrParentUrl(editProfile()) }"
            >
                Profile settings
            </Link>
        </li>
        <li>
            <Link
                :href="editSecurity()"
                :class="{ 'menu-active': isCurrentOrParentUrl(editSecurity()) }"
            >
                Security settings
            </Link>
        </li>
    </ul>

    <slot />
</template>
