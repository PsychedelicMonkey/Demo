import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Checkbox } from './Checkbox.vue';

export const checkboxVariants = cva('checkbox', {
    variants: {
        color: {
            primary: 'checkbox-primary',
            secondary: 'checkbox-secondary',
            accent: 'checkbox-accent',
            neutral: 'checkbox-neutral',
            success: 'checkbox-success',
            warning: 'checkbox-warning',
            info: 'checkbox-info',
            error: 'checkbox-error',
        },
        size: {
            xs: 'checkbox-xs',
            sm: 'checkbox-sm',
            md: 'checkbox-md',
            lg: 'checkbox-lg',
            xl: 'checkbox-xl',
        },
    },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
