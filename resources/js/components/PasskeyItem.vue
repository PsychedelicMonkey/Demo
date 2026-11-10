<script setup lang="ts">
import type { Passkey } from '@/types';
import { ref, useTemplateRef } from 'vue';
import { KeyRound, Trash2 } from '@lucide/vue';
import { Button } from '@/components/ui/button';

const props = defineProps<{
    passkey: Passkey;
}>();

const emit = defineEmits<{
    remove: [id: number, onError: () => void];
}>();

const isDeleting = ref<boolean>(false);

const handleDelete = () => {
    isDeleting.value = true;
    emit('remove', props.passkey.id, () => {
        isDeleting.value = false;
    });
};

const modal = useTemplateRef('modal');
</script>

<template>
    <li class="list-row">
        <div>
            <KeyRound class="h-5 w-5" />
        </div>
        <div>
            <div>
                <p class="font-medium tracking-tight">{{ passkey.name }}</p>
                <span v-if="passkey.authenticator">
                    {{ passkey.authenticator }}
                </span>
            </div>
            <div class="text-xs font-semibold uppercase opacity-60">
                Added {{ passkey.created_at_diff }}
                <template v-if="passkey.last_used_at_diff">
                    <span class="mx-1">/</span>
                    Last used {{ passkey.last_used_at_diff }}
                </template>
            </div>
        </div>
        <Button
            color="error"
            variant="ghost"
            modifier="square"
            @click="modal?.showModal()"
        >
            <Trash2 class="h-4 w-4" />
        </Button>

        <dialog class="modal" ref="modal">
            <div class="modal-box">
                <h3 class="font bold text-lg">Remove passkey</h3>
                <p class="py-4">
                    Are you sure you want to remove the "{{ passkey.name }}"
                    passkey? You will no longer be able to use it to sign in.
                </p>
                <div class="modal-action">
                    <form method="dialog">
                        <Button color="secondary">Cancel</Button>
                    </form>
                    <Button
                        color="error"
                        :disabled="isDeleting"
                        @click="handleDelete"
                    >
                        {{ isDeleting ? 'Removing...' : 'Remove passkey' }}
                    </Button>
                </div>
            </div>
        </dialog>
    </li>
</template>
