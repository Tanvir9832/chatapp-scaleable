'use client'
import { useState } from 'react'
import { useSocket } from '../context/SocketProvider'
import classes from './page.module.css'

export default function Page() {
  const { sendMessage } = useSocket()
  const [message, setMessage] = useState('');
  return (
    <div className={classes['full-chat']}>
      <h1 className={classes['h1']}>All messages</h1>
      <div className={classes["textFieldAndButton"]}>
        <input onChange={(e) => setMessage(e.target.value)} className={classes['messageBox']} type="text" placeholder="message..." />
        <button onClick={() => { message.length > 0 ? sendMessage(message) : '' }} className={classes['btn']}>send</button>
      </div>
    </div>
  )
}