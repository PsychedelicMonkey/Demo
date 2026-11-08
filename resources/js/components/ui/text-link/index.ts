import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as TextLink } from './TextLink.vue';

export const linkVariants = cva('link', {
    variants: {
        variant: {
            hover: 'link-hover',
        },
        color: {
            neutral: 'link-neutral',
            primary: 'link-primary',
            secondary: 'link-secondary',
            accent: 'link-accent',
            success: 'link-success',
            info: 'link-info',
            warning: 'link-warning',
            error: 'link-error',
        },
    },
});

export type LinkVariants = VariantProps<typeof linkVariants>;
