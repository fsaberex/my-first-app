import styles from './MyComponent.module.css'

function MyComponent() {
  return (
    <>
      <h1 className={styles.heading}>"Todo App"</h1>
      <ul className={styles.ul}>
        <li className={styles.bodyText}><input type="checkbox"/>Get groceries</li>
        <li className={styles.bodyText}><input type="checkbox"/>Mow the lawn</li>
      </ul>
    </>
  )
}

export default MyComponent