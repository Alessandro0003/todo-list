import styles from './InputAddTasks.module.css'

export function InputAddTasks() {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
    </div>
  )
}
