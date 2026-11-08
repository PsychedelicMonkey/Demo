import {createInertiaApp} from '@inertiajs/vue3';
import AppLayout from "@/layouts/AppLayout.vue";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: title => (title ? `${title} - ${appName}` : appName),
    layout: () => {
        return AppLayout;
    },
    progress: {
        color: '#4B5563',
    },
});
