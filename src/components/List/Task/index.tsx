import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css'
import type { InterfaceTaskProps } from '../../../App'

interface TaskProps {
  data: InterfaceTaskProps
}

export function Task({ data }: TaskProps) {
 
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

      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}