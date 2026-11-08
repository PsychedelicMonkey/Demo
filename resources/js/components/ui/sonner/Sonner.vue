<script setup lang="ts">
import { Loading } from '@/components/ui/loading';
import type { ToasterProps } from 'vue-sonner';
import {
    CircleCheckIcon,
    InfoIcon,
    OctagonXIcon,
    TriangleAlertIcon,
    XIcon,
} from '@lucide/vue';
import { Toaster as Sonner } from 'vue-sonner';

import 'vue-sonner/style.css';

const props = defineProps<ToasterProps>();
</script>

<template>
    <Sonner
        :toastOptions="{
            unstyled: true,
            classes: {
                toast: 'alert w-full',
                success: 'alert-success text-success-content',
                info: 'alert-info text-info-content',
                warning: 'alert-warning text-warning-content',
                error: 'alert-error text-error-content',
            },
        }"
    >
        <template #success-icon>
            <CircleCheckIcon class="size-4" />
        </template>
        <template #info-icon>
            <InfoIcon class="size-4" />
        </template>
        <template #warning-icon>
            <TriangleAlertIcon class="size-4" />
        </template>
        <template #error-icon>
            <OctagonXIcon class="size-4" />
        </template>
        <template #loading-icon>
            <div>
                <Loading variant="bars" class="size-4" />
            </div>
        </template>
        <template #close-icon>
            <XIcon class="size-4" />
        </template>
    </Sonner>
</template>
