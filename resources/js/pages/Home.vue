<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import InputError from '@/components/InputError.vue';
import { Alert } from '@/components/ui/alert';
import { TextLink } from '@/components/ui/text-link';
import { home } from '@/routes';
import PasswordInput from '@/components/PasswordInput.vue';
import { Kbd } from '@/components/ui/kbd';
</script>

<template>
    <Head title="Home Page" />

    <Kbd>ESC</Kbd>

    <h1 class="text-3xl font-semibold">Home Page</h1>

    <Fieldset class="w-xs rounded-box border border-base-300 bg-base-200 p-4">
        <FieldsetLegend>Login</FieldsetLegend>
        <Alert color="info">FYI</Alert>

        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
        <InputError message="Email already taken" />
        <Label for="password">Password</Label>
        <PasswordInput name="password" id="password" placeholder="Password" />
        <TextLink :href="home()" color="info">Forgot your password?</TextLink>
        <Label>
            <Checkbox name="remember" id="remember" />
            Remember me
        </Label>
        <Button type="submit" color="neutral" class="mt-4">
            <Loading variant="bars" />
            <span>Login</span>
        </Button>
    </Fieldset>
</template>
