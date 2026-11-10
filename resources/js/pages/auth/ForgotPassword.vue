<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { Alert } from '@/components/ui/alert';
import { email } from '@/routes/password';

defineOptions({
    layout: {
        title: 'Forgot password',
        description: 'Enter your email to receive a password reset link',
    },
});

defineProps<{
    status?: string;
}>();
</script>

<template>
    <Head title="Forgot password" />

    <Form v-bind="email.form()" v-slot="{ processing, errors }">
        <Fieldset>
            <Alert v-if="status" color="info" class="my-4">{{ status }}</Alert>

            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                :class="['w-full', { 'input-error': errors.email }]"
                v-focus
            />
            <InputError :message="errors.email" />

            <Button
                type="submit"
                color="neutral"
                class="mt-4"
                :disabled="processing"
            >
                <Loading v-if="processing" variant="bars" />
                <span v-else>Email password reset link</span>
            </Button>
        </Fieldset>
    </Form>
</template>
