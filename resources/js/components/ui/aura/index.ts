import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export { default as Aura } from './Aura.vue';

export const auraVariants = cva('aura', {
    variants: {
        variant: {
            dual: 'aura-dual',
            rainbow: 'aura-rainbow',
            holo: 'aura-holo',
            gold: 'aura-gold',
            silver: 'aura-silver',
            glow: 'aura-glow',
        },
        size: {
            xs: 'aura-xs',
            sm: 'aura-sm',
            md: 'aura-md',
            lg: 'aura-lg',
            xl: 'aura-xl',
        },
    },
});

export type AuraVariants = VariantProps<typeof auraVariants>;
