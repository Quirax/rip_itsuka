import { cn } from '@sglara/cn'

export default ({ children, className }) => (
    <section className={cn('min-h-screen w-full', className)}>{children}</section>
)
