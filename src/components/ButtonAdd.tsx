import { PlusCircle } from '@phosphor-icons/react'

import styles from './ButtonAdd.module.css'

export function ButtonAdd() {
  return (
    <div>
      <button className={styles.button}>
        Criar
        <PlusCircle className={styles.iconPlus} size={18} />
      </button>
    </div>
  )
}
