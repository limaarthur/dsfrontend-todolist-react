import { PlusCircle } from '@phosphor-icons/react'
import styles from './App.module.css'

import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'

import { Empty } from './components/List/Empty'
import { HeaderListTasks } from './components/List/HeaderListTasks'

import './global.css'

export function App() {
  return (
    <main>
      <Header />
      
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <HeaderListTasks />
        </div>

        <Empty />
      </section>
    </main>
  )
}
