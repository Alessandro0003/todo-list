import { ITasks } from '../../App'
import styles from './Tasks.module.css'
import { Trash, Check } from '@phosphor-icons/react'

interface TasksProps {
  data: ITasks
  removeTasks: (id: number) => void
  toggleTasksStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Tasks({ data, removeTasks, toggleTasksStatus }: TasksProps) {
  function handleTasksToggle() {
    toggleTasksStatus({ id: data.id, value: !data.isChecked })
  }

  function handleTasksRemove() {
    removeTasks(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTasksToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} color="#ffff" />}
          </span>
          <p className={`${styles.paragraph}  ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>
      <button onClick={handleTasksRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
