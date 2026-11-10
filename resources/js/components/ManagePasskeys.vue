<script setup lang="ts">
import type { Passkey } from '@/types';
import { Divider } from '@/components/ui/divider';
import { KeyRound } from '@lucide/vue';
import PasskeyItem from '@/components/PasskeyItem.vue';
import { router } from '@inertiajs/vue3';
import { destroy } from '@/actions/Laravel/Passkeys/Http/Controllers/PasskeyRegistrationController';
import PasskeyRegister from '@/components/PasskeyRegister.vue';

export type Props = {
    canManagePasskeys?: boolean;
    passkeys?: Passkey[];
};

withDefaults(defineProps<Props>(), {
    canManagePasskeys: false,
    passkeys: () => [],
});

const handleDelete = (id: number, onError: () => void) => {
    router.delete(destroy.url(id), {
        preserveScroll: true,
        onError,
    });
};

const handleRegisterSuccess = () => {
    router.reload();
};
</script>

<template>
    <div v-if="canManagePasskeys">
        <Divider>Passkeys</Divider>

        <div class="space-y-6">
            <ul
                v-if="passkeys.length"
                class="list rounded-box bg-base-100 shadow-md"
            >
                <PasskeyItem
                    v-for="passkey in passkeys"
                    :key="passkey.id"
                    :passkey="passkey"
                    @remove="handleDelete"
                />
            </ul>
            <div
                v-else
                class="rounded-box border border-base-100 bg-base-200 p-8 text-center"
            >
                <div
                    class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-box"
                >
                    <KeyRound class="h-7 w-7" />
                </div>
                <p class="font-medium">No passkeys yet</p>
                <p class="mt-1 text-sm">
                    Add a passkey to sign in without a password
                </p>
            </div>

            <PasskeyRegister @success="handleRegisterSuccess" />
        </div>
    </div>
</template>
