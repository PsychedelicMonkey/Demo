<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import PasswordInput from '@/components/PasswordInput.vue';
import InputError from '@/components/InputError.vue';
import { store } from '@/routes/password/confirm';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
</script>

<template>
    <Head title="Confirm password" />

    <Form
        v-bind="store.form()"
        reset-on-success
        v-slot="{ processing, errors }"
    >
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Confirm password</FieldsetLegend>

            <Label for="password">Password</Label>
            <PasswordInput
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                autocomplete="current-password"
                autofocus
                :class="{ 'input-error': errors.password }"
            />
            <InputError :message="errors.password" />

            <Button
                type="submit"
                color="neutral"
                class="mt-4"
                :disabled="processing"
            >
                <Loading v-if="processing" variant="bars" />
                <span v-else>Confirm password</span>
            </Button>
        </Fieldset>
    </Form>
</template>
