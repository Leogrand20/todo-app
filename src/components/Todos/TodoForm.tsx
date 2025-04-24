import { Button } from '../UI/Button'

import styles from './TodoForm.module.css'

export const TodoForm = () => {
  return (
    <div className={styles['todoFormContainer']}>
      <form className="my-4">
        <input type="text" placeholder="Enter new todo" />

        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
