import { Header } from './components/Header'
import { InputAddTasks } from './components/InputAddTasks'
import styles from './App.module.css'
import { Empty } from './components/list/Empty'
import { ListHeader } from './components/list/ListHeader'
import { ButtonAdd } from './components/ButtonAdd'

export function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputButtonCenter}>
          <InputAddTasks />
          <ButtonAdd />
        </div>
        <div className={styles.center}>
          <ListHeader />
          <Empty />
        </div>
      </section>
    </main>
  )
}
