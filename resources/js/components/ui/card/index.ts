import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Card } from './Card.vue';
export { default as CardBody } from './CardBody.vue';
export { default as CardTitle } from './CardTitle.vue';
export { default as CardActions } from './CardActions.vue';

export const cardVariants = cva('card', {
    variants: {
        variant: {
            border: 'card-border',
            dash: 'card-dash',
        },
        modifier: {
            side: 'card-side',
            imageFull: 'image-full',
        },
        size: {
            xs: 'card-xs',
            sm: 'card-sm',
            md: 'card-md',
            lg: 'card-lg',
            xl: 'card-xl',
        },
    },
});

export type CardVariants = VariantProps<typeof cardVariants>;
