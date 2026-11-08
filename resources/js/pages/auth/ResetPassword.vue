<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { ref } from 'vue';
import { update } from '@/routes/password';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';

const props = defineProps<{
    token: string;
    email: string;
    passwordRules: string;
}>();

const inputEmail = ref(props.email);
</script>

<template>
    <Head title="Reset password" />

    <Form
        v-bind="update.form()"
        :transform="(data) => ({ ...data, token, email })"
        :reset-on-success="['password', 'password_confirmation']"
        v-slot="{ processing, errors }"
    >
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Reset password</FieldsetLegend>

            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                v-model="inputEmail"
                :class="{ 'input-error': errors.email }"
                readonly
            />
            <InputError :message="errors.email" />

            <Label for="password">Password</Label>
            <PasswordInput
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                :class="{ 'input-error': errors.password }"
                :passwordrules="passwordRules"
            />
            <InputError :message="errors.password" />

            <Label for="password_confirmation">Confirm password</Label>
            <PasswordInput
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm password"
                :class="{ 'input-error': errors.password_confirmation }"
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
                <span v-else>Reset password</span>
            </Button>
        </Fieldset>
    </Form>
</template>
