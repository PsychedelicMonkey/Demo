import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Divider } from './Divider.vue';

export const dividerVariants = cva('divider', {
    variants: {
        color: {
            neutral: 'divider-neutral',
            primary: 'divider-primary',
            secondary: 'divider-secondary',
            accent: 'divider-accent',
            success: 'divider-success',
            warning: 'divider-warning',
            info: 'divider-info',
            error: 'divider-error',
        },
        direction: {
            vertical: 'divider-vertical',
            horizontal: 'divider-horizontal',
        },
        placement: {
            start: 'divider-start',
            end: 'divider-end',
        },
    },
});

export type DividerVariants = VariantProps<typeof dividerVariants>;
