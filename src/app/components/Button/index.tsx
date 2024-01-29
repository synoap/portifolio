import { type ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'>

export const Button = (pros: ButtonProps): JSX.Element => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-1.5 text-sm font-bold text-white hover:bg-blue-700"
      {...pros}
    />
  )
}
