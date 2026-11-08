import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
export { default as Input } from './Input.vue';

export const inputVariants = cva('input', {
    variants: {
        variant: {
            ghost: 'input-ghost',
        },
        color: {
            neutral: 'input-neutral',
            primary: 'input-primary',
            secondary: 'input-secondary',
            accent: 'input-accent',
            info: 'input-info',
            success: 'input-success',
            warning: 'input-warning',
            error: 'input-error',
        },
        size: {
            xs: 'input-xs',
            sm: 'input-sm',
            md: 'input-md',
            lg: 'input-lg',
            xl: 'input-xl',
        },
    },
});

export type InputVariants = VariantProps<typeof inputVariants>;
