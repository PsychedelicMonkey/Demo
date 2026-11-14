import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Kbd } from './Kbd.vue';

export const kbdVariants = cva('kbd', {
    variants: {
        size: {
            xs: 'kbd-xs',
            sm: 'kbd-sm',
            md: 'kbd-md',
            lg: 'kbd-lg',
            xl: 'kbd-xl',
        },
    },
});

export type KbdVariants = VariantProps<typeof kbdVariants>;
