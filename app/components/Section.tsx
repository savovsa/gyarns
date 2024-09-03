import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const sectionVariants = cva('w-full py-12 md:py-24', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      secondary: 'bg-gray-100 dark:bg-gray-800',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type SectionProps = VariantProps<typeof sectionVariants> & {
  title?: string | React.ReactNode
  children?: React.ReactNode
}

export function Section(props: SectionProps) {
  return (
    <section className={cn(sectionVariants({ variant: props.variant }))}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-left">
        {props.title && (
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-left mb-8">
            {props.title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {props.children}
        </div>
      </div>
    </section>
  )
}
