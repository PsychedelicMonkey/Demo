import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Alert } from './Alert.vue';

export const alertVariants = cva('alert', {
    variants: {
        variant: {
            outline: 'alert-outline',
            dash: 'alert-dash',
            soft: 'alert-soft',
        },
        color: {
            info: 'alert-info',
            success: 'alert-success',
            warning: 'alert-warning',
            error: 'alert-error',
        },
    },
});

export type AlertVariants = VariantProps<typeof alertVariants>;
