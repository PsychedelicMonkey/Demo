<script setup lang="ts">
import { Form, Head, Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import DeleteUser from '@/components/DeleteUser.vue';
import { send } from '@/routes/verification';

const page = usePage();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <Head title="Profile settings" />

    <Form
        v-bind="ProfileController.update.form()"
        v-slot="{ processing, errors }"
    >
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Profile settings</FieldsetLegend>

            <Label for="name">Name</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                :default-value="user.name"
                :class="{ 'input-error': errors.name }"
            />
            <InputError :message="errors.name" />

            <Label for="email">Email address</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                :default-value="user.email"
                :class="{ 'input-error': errors.email }"
            />
            <InputError :message="errors.email" />

            <div v-if="page.props.mustVerifyEmail && !user.email_verified_at">
                <p class="text-xs">
                    Your email address is unverified.
                    <Link :href="send()" as="button" class="link">
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-if="page.props.status === 'verification-link-sent'"
                    class="mt-2 text-xs font-medium text-success"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <Button
                type="submit"
                color="neutral"
                class="mt-4"
                :disabled="processing"
            >
                <Loading v-if="processing" variant="bars" />
                <span v-else>Save changes</span>
            </Button>
        </Fieldset>
    </Form>

    <DeleteUser />
</template>
