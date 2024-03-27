import styles from './Tasks.module.css'
import { Trash, Check } from '@phosphor-icons/react'

export function Tasks() {
  const checkboxCheckedClassname =
    styles['checkbox-checked'] ?? styles['checkbox-unchecked']
  const paragraphCheckedClassname = styles['paragraph-checked']

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            <Check size={12} color="#ffff" />
          </span>
          <p
            className={`${styles.paragraph}  ${paragraphCheckedClassname}`}
          ></p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
