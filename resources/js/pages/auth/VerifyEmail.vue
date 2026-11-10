<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { send } from '@/routes/verification';
import { Loading } from '@/components/ui/loading';
import { TextLink } from '@/components/ui/text-link';
import { logout } from '@/routes';
import { Alert } from '@/components/ui/alert';

defineOptions({
    layout: {
        title: 'Email verification',
        description:
            'Please verify your email address by clicking on the link we just emailed to you',
    },
});

defineProps<{
    status?: string;
}>();
</script>

<template>
    <Head title="Verify email" />

    <Alert v-if="status === 'verification-link-sent'" color="info" class="my-4">
        A new verification link has been sent to the email address you provided
        during registration
    </Alert>

    <Form
        v-bind="send.form()"
        class="space-y-6 text-center"
        v-slot="{ processing }"
    >
        <Button color="neutral" modifier="block" :disabled="processing">
            <Loading v-if="processing" variant="bars" />
            <span v-else>Send verification email</span>
        </Button>

        <TextLink :href="logout()" as="button" class="mx-auto block text-sm">
            Log out
        </TextLink>
    </Form>
</template>
