<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { usePasskeyRegister } from '@laravel/passkeys/vue';
import { ref } from 'vue';
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/InputError.vue';

const emit = defineEmits<{
    success: [];
}>();

const getDefaultPasskeyName = () => {
    const ua = navigator.userAgent;

    const browser = [
        { pattern: /Edg|Edge/, name: 'Edge' },
        { pattern: /OPR|Opera|OPiOS/, name: 'Opera' },
        { pattern: /Firefox|FxiOS/, name: 'Firefox' },
        { pattern: /Chrome|CriOS/, name: 'Chrome' },
        { pattern: /Safari/, name: 'Safari' },
    ].find(({ pattern }) => pattern.test(ua))?.name;

    const os = [
        { pattern: /iPhone/, name: 'iPhone' },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: 'iPad' },
        { pattern: /Android/, name: 'Android' },
        { pattern: /Mac/, name: 'Mac' },
        { pattern: /Windows/, name: 'Windows' },
    ].find(({ pattern }) => pattern.test(ua))?.name;

    return [browser, os].filter(Boolean).join(' on ') || '';
};

const name = ref(getDefaultPasskeyName());
const showForm = ref<boolean>(false);

const { register, isLoading, error, isSupported } = usePasskeyRegister({
    onSuccess: () => {
        name.value = '';
        showForm.value = false;
        emit('success');
    },
});

const handleSubmit = async (event: Event) => {
    event.preventDefault();

    if (!name.value.trim()) {
        return;
    }

    await register(name.value);
};

const handleCancel = () => {
    showForm.value = false;
    name.value = '';
};
</script>

<template>
    <div v-if="!isSupported" class="text-sm">
        Passkeys are not supported in this browser
    </div>

    <Button v-else-if="!showForm" variant="outline" @click="showForm = true">
        Add passkey
    </Button>

    <form v-else @submit="handleSubmit">
        <Fieldset
            class="w-xs rounded-box border border-base-300 bg-base-200 p-4"
        >
            <FieldsetLegend>Add passkey</FieldsetLegend>

            <Label for="passkey-name">Passkey name</Label>
            <Input
                type="text"
                name="passkey-name"
                id="passkey-name"
                v-model="name"
                placeholder="e.g., MacBook Pro, iPhone"
                v-focus
            />
            <Label> A name helps you identify this passkey later. </Label>
            <InputError v-if="error" :message="error" />

            <Button
                type="submit"
                color="neutral"
                :disabled="isLoading || !name.trim()"
            >
                {{ isLoading ? 'Registering...' : 'Register passkey' }}
            </Button>
            <Button type="button" variant="ghost" @click="handleCancel">
                Cancel
            </Button>
        </Fieldset>
    </form>
</template>
