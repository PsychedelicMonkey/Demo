import type {VariantProps} from "class-variance-authority";
import {cva} from "class-variance-authority";

export {default as Loading} from './Loading.vue'

export const loadingVariants = cva('loading', {
    variants: {
        variant: {
            spinner: 'loading-spinner',
            dots: 'loading-dots',
            ring: 'loading-ring',
            ball: 'loading-ball',
            bars: 'loading-bars',
            infinity: 'loading-infinity',
        },
        size: {
            xs: 'loading-xs',
            sm: 'loading-sm',
            md: 'loading-md',
            lg: 'loading-lg',
            xl: 'loading-xl',
        }
    }
})

export type LoadingVariants = VariantProps<typeof loadingVariants>
