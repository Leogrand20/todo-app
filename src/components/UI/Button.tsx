import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  disabled,
  children,
  className,
  ...restProps
}) => {
  return (
    <>
      <button
        {...restProps}
        className={styles['button'] ?? ''}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}
