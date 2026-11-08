import type {VariantProps} from "class-variance-authority";
import {cva} from "class-variance-authority";

export {default as Badge} from './Badge.vue'

export const badgeVariants = cva('badge', {
    variants: {
        variant: {
            outline: 'badge-outline',
            dash: 'badge-dash',
            soft: 'badge-soft',
            ghost: 'badge-ghost',
        },
        color: {
            neutral: 'badge-neutral',
            primary: 'badge-primary',
            secondary: 'badge-secondary',
            accent: 'badge-accent',
            info: 'badge-info',
            success: 'badge-success',
            warning: 'badge-warning',
            error: 'badge-error',
        },
        size: {
            xs: 'badge-xs',
            sm: 'badge-sm',
            md: 'badge-md',
            lg: 'badge-lg',
            xl: 'badge-xl',
        }
    }
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
