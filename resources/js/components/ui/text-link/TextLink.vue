<script setup lang="ts">
import type { LinkComponentBaseProps, Method } from '@inertiajs/core';
import { Link } from '@inertiajs/vue3';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import type { LinkVariants } from '@/components/ui/text-link';
import { linkVariants } from '@/components/ui/text-link';

type Props = {
    href: LinkComponentBaseProps['href'];
    tabindex?: number;
    method?: Method;
    as?: string;
    variant?: LinkVariants['variant'];
    color?: LinkVariants['color'];
    class?: HTMLAttributes['class'];
};

const props = defineProps<Props>();
</script>

<template>
    <Link
        :href="href"
        :tabindex="tabindex"
        :method="method"
        :as="as"
        :class="cn(linkVariants({ variant, color }), props.class)"
    >
        <slot />
    </Link>
</template>
