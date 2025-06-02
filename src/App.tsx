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

export interface InterfaceTaskProps { // Interface que define a estrutura de uma tarefa
  id: number
  text: string 
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<InterfaceTaskProps[]>([]) // Estado para armazenar a lista de tarefas
  const [inputValue, setInputValue] = useState('') // Estado para controlar o valor do input de nova tarefa

  function handleAddTask() { // Função responsável por adicionar uma nova tarefa à lista
    if (!inputValue) { // Evita adicionar tarefas vazias
      return
    }

    const newTask: InterfaceTaskProps = { // Criação do objeto da nova tarefa
      id: new Date().getTime(), // ID único baseado no timestamp atual
      text: inputValue,
      isChecked: false,
    }
    
    setTasks((state) => [...state, newTask]) // Atualiza a lista de tarefas com a nova tarefa
    setInputValue('') // Limpa o campo de input após adicionar a tarefa
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  return (
    <main>
      <Header />
      
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}> {/* Container do input e botão de adicionar tarefa */}
          <Input 
            onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado conforme o usuário digita
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
            {tasks.map((task) => ( // Renderiza as tarefas existentes
              <Task 
                key={task.id}
                data={task} 
                removeTask={handleRemoveTask}
              />
            ))}
          </div>
          <Empty /> {/* Componente mostrado quando não há tarefas */}
        </div>
      </section>
    </main>
  )
}
