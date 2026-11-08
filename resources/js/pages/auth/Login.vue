<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { store } from '@/routes/login';

defineProps<{
    canResetPassword: boolean;
    status?: string;
}>();
</script>

<template>
    <Head title="Login" />

    <Form
        v-bind="store.form()"
        :reset-on-success="['password']"
        v-slot="{ processing, errors }"
    >
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Login</FieldsetLegend>
            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                :class="{ 'input-error': errors.email }"
            />
            <InputError :message="errors.email" />

            <Label for="password">Password</Label>
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                :class="{ 'input-error': errors.password }"
            />
            <InputError :message="errors.password" />

            <Label>
                <Checkbox name="remember" id="remember" />
                Remember me
            </Label>

            <Button color="neutral" class="mt-4" :disabled="processing">
                <Loading v-if="processing" variant="bars" />
                <span v-else>Login</span>
            </Button>
        </Fieldset>
    </Form>
</template>
