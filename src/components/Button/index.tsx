import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-lime-600 hover:bg-lime-700 transition rounded-full text-white text-sm font-semibold "
      {...rest}
    >
      {children}
    </button>
  )
}
