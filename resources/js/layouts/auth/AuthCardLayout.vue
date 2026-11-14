<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { home } from '@/routes';
import { Card, CardBody, CardTitle } from '@/components/ui/card';
import AppLogoIcon from '@/components/AppLogoIcon.vue';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div
        class="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
    >
        <div class="flex w-full max-w-md flex-col gap-6">
            <Link
                :href="home()"
                class="flex items-center gap-2 self-center font-medium"
            >
                <div class="flex h-9 w-9 items-center justify-center">
                    <AppLogoIcon
                        class="size-9 fill-current text-base-content"
                    />
                </div>
            </Link>

            <div class="flex flex-col gap-6">
                <Card class="bg-base-200 shadow-lg">
                    <CardBody>
                        <CardTitle class="self-center">{{ title }}</CardTitle>
                        <p class="self-center">{{ description }}</p>
                        <slot />
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
</template>
