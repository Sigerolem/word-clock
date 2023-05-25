import { useEffect, useRef, useState } from 'react'
import styles from './App.module.css'
import { arrayEnUs, arrayPtBr, getHighLightedLetterArray } from './utils'

function App() {
  const [highLightedLetters, setHighLitghtedLetters] = useState<number[]>([])
  const [highLightedDots, setHighLitghtedDots] = useState(0)
  const intervalRef = useRef<number>()

  let letterArray = [] as string[]

  if (navigator.language === 'pt-BR') {
    letterArray = arrayPtBr
  } else {
    letterArray = arrayEnUs
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newHighLight = getHighLightedLetterArray(navigator.language)
      setHighLitghtedLetters(newHighLight)
      setHighLitghtedDots((new Date).getMinutes() % 5)
    }, 1000)
    return (() => {
      clearInterval(intervalRef.current)
    })
  }, [])


  return (
    <main className={styles.container} >
      <div className={styles.letterGrid} >
        {letterArray.map((letter, index) => (
          <span key={index} className={`${styles.letterItem} ${highLightedLetters.includes(index) ? styles.highlight : ''}`} >{letter}</span>
        ))}
      </div>
      <span style={{ right: '90%', bottom: '90%' }} className={`${styles.dot} ${highLightedDots > 0 ? styles.highlightedDots : ''}`} >●</span>
      <span style={{ left: '90%', bottom: '90%' }} className={`${styles.dot} ${highLightedDots > 1 ? styles.highlightedDots : ''}`} >●</span>
      <span style={{ left: '90%', top: '90%' }} className={`${styles.dot} ${highLightedDots > 2 ? styles.highlightedDots : ''}`} >●</span>
      <span style={{ right: '90%', top: '90%' }} className={`${styles.dot} ${highLightedDots > 3 ? styles.highlightedDots : ''}`} >●</span>
    </main>
  )
}

export default App
