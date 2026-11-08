<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { store } from '@/routes/register';

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
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Register</FieldsetLegend>

            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Name" />
            <InputError :message="errors.name" />

            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
            />
            <InputError :message="errors.email" />

            <Label for="password">Password</Label>
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            <InputError :message="errors.password" />

            <Label for="password_confirmation">Confirm password</Label>
            <Input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm password"
            />
            <InputError :message="errors.password_confirmation" />

            <Button
                type="submit"
                color="neutral"
                class="mt-4"
                :disabled="processing"
            >
                <Loading v-if="processing" />
                <span v-else>Register</span>
            </Button>
        </Fieldset>
    </Form>
</template>
