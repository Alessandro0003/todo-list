import { Header } from './components/Header'
import { InputAddTasks } from './components/InputAddTasks'
import { Empty } from './components/list/Empty'
import { ListHeader } from './components/list/ListHeader'
import { ButtonAdd } from './components/ButtonAdd'

import { useState } from 'react'

import styles from './App.module.css'
import { Tasks } from './components/list/Tasks'

export interface ITasks {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])

  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTasks) => {
    if (currentTasks.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTasks() {
    if (!inputValue) {
      return Error('Voce precisa adicionar uma tarefa!')
    }

    const newTasks: ITasks = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTasks])
    setInputValue('')
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  function handleRemoveTasks(id: number) {
    const removeTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa')) {
      return
    }

    setTasks(removeTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputButtonCenter}>
          <InputAddTasks
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <ButtonAdd onClick={handleAddTasks}>Criar</ButtonAdd>
        </div>
        <div className={styles.center}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Tasks
                  key={task.id}
                  data={task}
                  removeTasks={handleRemoveTasks}
                  toggleTasksStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}
