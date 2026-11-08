<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import ThemeController from '@/components/ThemeController.vue';
</script>

<template>
    <Head title="Appearance settings" />

    <Fieldset class="w-xs rounded-box p-4">
        <FieldsetLegend>Appearance settings</FieldsetLegend>

        <ThemeController />
    </Fieldset>
</template>
