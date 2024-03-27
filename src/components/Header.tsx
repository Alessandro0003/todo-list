import styles from './Header.module.css'
import iconHeader from '../assets/icon.png'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <img src={iconHeader} alt="" />
        </div>
        <div className={styles.title}>
          <strong className={styles.to}>to</strong>
          <strong className={styles.do}>do</strong>
        </div>
      </header>
    </div>
  )
}
