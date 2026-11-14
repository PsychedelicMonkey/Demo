<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { ref, useTemplateRef } from 'vue';
import { Eye, EyeOff } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
    class?: HTMLAttributes['class'];
    autofocus?: boolean;
}>();

const showPassword = ref<boolean>(false);
const inputRef = useTemplateRef('inputRef');

defineExpose({
    $el: inputRef,
    focus: () => inputRef.value?.$el?.focus(),
});
</script>

<template>
    <div class="join">
        <Input
            v-focus="props.autofocus"
            ref="inputRef"
            :type="showPassword ? 'text' : 'password'"
            v-bind="$attrs"
            :class="cn('join-item', props.class)"
        />
        <Button
            type="button"
            @click="showPassword = !showPassword"
            class="join-item"
        >
            <EyeOff v-if="showPassword" class="size-4" />
            <Eye v-else class="size-4" />
        </Button>
    </div>
</template>
