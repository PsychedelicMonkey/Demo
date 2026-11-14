<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { store } from '@/routes/register';
import PasswordInput from '@/components/PasswordInput.vue';

defineOptions({
    layout: {
        title: 'Create an account',
        description: 'Enter your details to create your account',
    },
});

defineProps<{
    passwordRules: string;
}>();
</script>

<template>
    <Head title="Register" />

    <Form
        v-bind="store.form()"
        :reset-on-success="['password', 'password_confirmation']"
        v-slot="{ processing, errors }"
    >
        <Fieldset>
            <Label for="name">Name</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                :class="['w-full', { 'input-error': errors.name }]"
            />
            <InputError :message="errors.name" />

            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                :class="['w-full', { 'input-error': errors.email }]"
            />
            <InputError :message="errors.email" />

            <Label for="password">Password</Label>
            <PasswordInput
                name="password"
                id="password"
                placeholder="Password"
                :class="['w-full', { 'input-error': errors.password }]"
            />
            <InputError :message="errors.password" />

            <Label for="password_confirmation">Confirm password</Label>
            <PasswordInput
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm password"
                :class="[
                    'w-full',
                    { 'input-error': errors.password_confirmation },
                ]"
                :passwordrules="passwordRules"
            />
            <InputError :message="errors.password_confirmation" />

            <Button
                type="submit"
                color="neutral"
                class="mt-4"
                :disabled="processing"
            >
                <Loading v-if="processing" variant="bars" />
                <span v-else>Register</span>
            </Button>
        </Fieldset>
    </Form>
</template>
