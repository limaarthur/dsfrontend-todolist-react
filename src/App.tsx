import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'

import { HeaderListTasks } from './components/List/HeaderListTasks'
import { Task } from './components/List/Task'
import { Empty } from './components/List/Empty'

import styles from './App.module.css'
import './global.css'

export interface InterfaceTaskProps {
  id: number
  text: string 
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<InterfaceTaskProps[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: InterfaceTaskProps = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }
    
    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  return (
    <main>
      <Header />
      
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <HeaderListTasks />

          <div>
            {tasks.map((task) => (
              <Task 
                key={task.id}
                data={task} />
            ))}
          </div>
          <Empty />
        </div>
      </section>
    </main>
  )
}
