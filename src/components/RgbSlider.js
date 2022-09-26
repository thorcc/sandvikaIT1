import React from 'react'
import { useState } from 'react'
import styles from './rgbSlider.module.css'

function rgbSlider() {
  const [r, setR] = useState(50)
  const [g, setG] = useState(100)
  const [b, setB] = useState(155)
  
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

  return (
    <div className={styles.slider}>
      <div className={styles.inputs}>
        <label>
          <div>r:</div>
          <input value={r} onChange={(e) => setR(Number(e.target.value))} type="range" min={0} max={255} />
          <div className={styles.numbers}>{r}</div>
        </label>
        <label>
          <div>g:</div>
          <input value={g} onChange={(e) => setG(Number(e.target.value))} type="range" min={0} max={255} />
          <div className={styles.numbers}>{g}</div>
        </label>
        <label>
          <div>b:</div>
          <input value={b} onChange={(e) => setB(Number(e.target.value))} type="range" min={0} max={255} />
          <div className={styles.numbers}>{b}</div>
        </label>
      </div>
      <div className={styles.color} style={{ backgroundColor: `rgb(${r},${g},${b})`}}></div>
      <div className={styles.output}>
        <div><strong>CSS-koder</strong></div>
        <div>color: rgb({r},{g},{b});</div>
        <div>color: {rgbToHex(r,g,b)};</div>
      </div>
    </div>
  )
}

export default rgbSlider
