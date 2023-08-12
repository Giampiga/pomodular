import { useState, useLayoutEffect, useEffect } from 'react'
import './App.css'
import './index.css'

function App() {
  const [timer, setTimer] = useState()
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  
  const bells = new Audio('https://freesound.org/data/previews/80/80921_1022651-lq.mp3')

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1)
    }, 1000)

    setTimer(timer)
  }

  const turnSecondsIntoMinutes = (totalTime) => {
    const minutes = Math.floor(totalTime / 60)
    const seconds = totalTime % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  // When the timer reaches 0, play a sound
  useLayoutEffect(() => {
    if (secondsLeft === 0) {
      console.log('done')
      bells.play()
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);


  useLayoutEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  
  return (
    <>    
      <h1 className='bold py-12'>Pomodular</h1>
      <h1 className='py-12'>{turnSecondsIntoMinutes(secondsLeft)}</h1>

      <div className='flex flex-col justify-center bg-red-400 rounded-2xl px-8 py-12 gap-8'>
        <button className='flex m-auto bg-red-800' onClick={start}>Start</button>
        <button className='flex m-auto bg-red-800' onClick={() => clearInterval(timer)}>Pause</button>
        <button className='flex m-auto bg-red-800' onClick={() => setSecondsLeft(25 * 60)}>Reset</button>
      </div>
    </>
  )
}

export default App
