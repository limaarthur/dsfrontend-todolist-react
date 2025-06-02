import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css'
import type { InterfaceTaskProps } from '../../../App'

interface TaskProps {
  data: InterfaceTaskProps
  removeTask: (id: number) => void
}

export function Task({ data, removeTask }: TaskProps) {

  function handleRemove() {
    removeTask(data.id)
  }
 
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox"/>
          <span className={styles.checkbox}>
            <Check size={12} />
          </span>

          <p className={styles.paragraph}>
            {data.text}
          </p>
        </label>
      </div>

      <button
        onClick={handleRemove}
      >
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}