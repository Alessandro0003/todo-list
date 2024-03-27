import { PlusCircle } from '@phosphor-icons/react'

import styles from './ButtonAdd.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function ButtonAdd({ children, ...rest }: Props) {
  return (
    <div>
      <button className={styles.button} {...rest}>
        {children}
        <PlusCircle className={styles.iconPlus} size={18} />
      </button>
    </div>
  )
}
