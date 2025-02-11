import styles from './HeaderListTasks.module.css'

export function HeaderListTasks() {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>25</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>2 de 5</span>
      </aside>
    </header>
  )
}