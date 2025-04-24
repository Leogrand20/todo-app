import styles from './Button.module.css'

export const Button = (props: any) => {
  const { disabled, children } = props

  return (
    <>
      <button {...props} className={styles['button']} disabled={disabled}>
        {children}
      </button>
    </>
  )
}
