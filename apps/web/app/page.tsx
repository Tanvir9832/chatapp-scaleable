'use client'
import classes from './page.module.css'

export default function Page () {
  return (
    <div className={classes['full-chat']}>
      <h1 className={classes['h1']}>All messages</h1>
      <div className={classes["textFieldAndButton"]}>
        <input className={classes['messageBox']} type="text" placeholder="message..." />
        <button className={classes['btn']}>send</button>
      </div>
    </div>
  )
}