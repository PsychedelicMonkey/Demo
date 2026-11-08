<script setup lang="ts">
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Button } from '@/components/ui/button';
import { Form } from '@inertiajs/vue3';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';
import { Loading } from '@/components/ui/loading';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { X } from '@lucide/vue';
</script>

<template>
    <Fieldset class="w-xs rounded-box border border-base-300 bg-base-200 p-4">
        <FieldsetLegend>Delete account</FieldsetLegend>

        <label for="delete_user_modal" class="btn btn-error">
            Delete account
        </label>

        <input type="checkbox" id="delete_user_modal" class="modal-toggle" />
        <div class="modal" role="dialog">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Delete account</h3>
                <p class="py-4">
                    <span class="font-bold">Warning: </span>
                    Once you delete your account, all of its resources and data
                    will be permanently deleted.
                </p>
                <Form
                    v-bind="ProfileController.destroy.form()"
                    reset-on-success
                    :options="{
                        preserveScroll: true,
                    }"
                    v-slot="{ errors, processing, reset, clearErrors }"
                >
                    <Fieldset>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            :class="[
                                'w-full',
                                { 'input-error': errors.password },
                            ]"
                        />
                        <InputError :message="errors.password" />

                        <Button
                            type="submit"
                            color="error"
                            class="mt-4"
                            :disabled="processing"
                        >
                            <Loading v-if="processing" variant="bars" />
                            <span v-else>Delete account</span>
                        </Button>
                    </Fieldset>

                    <div class="modal-action">
                        <label
                            for="delete_user_modal"
                            class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
                            @click="
                                () => {
                                    clearErrors();
                                    reset();
                                }
                            "
                        >
                            <X class="size-4" />
                        </label>
                    </div>
                </Form>
            </div>
        </div>
    </Fieldset>
</template>
