import styles from './InputAddTasks.module.css'

export function InputAddTasks({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <div>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        {...rest}
      />
    </div>
  )
}
