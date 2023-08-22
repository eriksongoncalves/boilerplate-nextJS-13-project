import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const variants = tv({
  base: 'flex items-center justify-center rounded-full bg-lime-600 text-sm font-semibold text-white transition hover:bg-lime-700',
  variants: {
    size: {
      xs: 'h-6 px-3 text-xs',
      sm: 'h-8 px-4',
      md: 'h-10 px-5'
    },
    disabled: {
      true: 'disabled:bg-zinc-400 disabled:cursor-progress'
    },
    fullWidth: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    children: React.ReactNode
  }

export default function Button({
  children,
  size,
  disabled = false,
  fullWidth,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={variants({
        size,
        disabled,
        fullWidth,
        className: rest?.className
      })}
    >
      {children}
    </button>
  )
}
