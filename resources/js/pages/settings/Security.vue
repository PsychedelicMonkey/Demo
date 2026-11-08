<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import SecurityController from '@/actions/App/Http/Controllers/Settings/SecurityController';
import PasswordInput from '@/components/PasswordInput.vue';

type Props = {
    passwordRules: string;
};

const props = defineProps<Props>();
</script>

<template>
    <Head title="Security settings" />

    <Form
        v-bind="SecurityController.update.form()"
        :options="{
            preserveScroll: true,
        }"
        reset-on-success
        :reset-on-error="[
            'password',
            'password_confirmation',
            'current_password',
        ]"
        v-slot="{ processing, errors }"
    >
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Update password</FieldsetLegend>

            <Label for="current_password">Current password</Label>
            <PasswordInput
                type="password"
                name="current_password"
                id="current_password"
                placeholder="Current password"
                autocomplete="current-password"
                :class="{ 'input-error': errors.current_password }"
            />
            <InputError :message="errors.current_password" />

            <Label for="password">New password</Label>
            <PasswordInput
                type="password"
                name="password"
                id="password"
                autocomplete="new-password"
                placeholder="New password"
                :class="{ 'input-error': errors.password }"
                :passwordrules="props.passwordRules"
            />
            <InputError :message="errors.password" />

            <Label for="password_confirmation">Confirm password</Label>
            <PasswordInput
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Confirm password"
                autocomplete="new-password"
                :class="{ 'input-error': errors.password_confirmation }"
                :passwordrules="props.passwordRules"
            />
            <InputError :message="errors.password_confirmation" />

            <Button
                type="submit"
                color="neutral"
                class="mt-4"
                :disabled="processing"
            >
                <Loading v-if="processing" variant="bars" />
                <span v-else>Change password</span>
            </Button>
        </Fieldset>
    </Form>
</template>
