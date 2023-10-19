import React from 'react'
import { useState } from 'react'
import styles from './CssDisplay.module.css'

function CssDisplay() {

  const [disp, setDisp] = useState("block")
  const handleChange = (e) => {
    setDisp(e.target.value)
  }


  return (
    <div className={styles.main}>
      <div className={styles.code}>
        <div>
          <span className={styles.sel}>article</span> &#123;
          <div>
            <div>
              <span className={styles.prop}>display: </span>
              <select onChange={handleChange} id="display">
                <option selected>block</option>
                <option>inline</option>
                <option>inline-block</option>
                <option>none</option>
                <option>flex</option>
                <option>inline-flex</option>
                <option>grid</option>
                <option>inline-grid</option>
                <option>table</option>
                <option>list-item</option>
              </select>
            </div>
            <div><span className={styles.prop}>background-color:</span> <span className={styles.val}>red;</span></div>
            <div><span className={styles.prop}>margin:</span> <span className={styles.val}>20px;</span></div>
            <div><span className={styles.prop}>padding:</span> <span className={styles.val}>10px;</span></div>
            <div><span className={styles.prop}>border-radius:</span> <span className={styles.val}>7px;</span></div>

          </div>
          &#125;
        </div>

        <div>
          <span className={styles.sel}>span</span>  &#123;
          <div><span className={styles.prop}>background-color:</span> <span className={styles.val}>black;</span></div>
          <div><span className={styles.prop}>color:</span> <span className={styles.val}>white;</span></div>
          <div><span className={styles.prop}>margin:</span> <span className={styles.val}>1px;</span></div>
            <div><span className={styles.prop}>padding:</span> <span className={styles.val}>10px;</span></div>
            <div><span className={styles.prop}>border-radius:</span> <span className={styles.val}>7px;</span></div>
          &#125;
        </div>
      </div>
      <article style={{ display: disp }}>
        <span>Første</span>
        <span>Andre</span>
        <span>Tredje</span>
      </article>

      <article style={{ display: disp }}>
        <span>Første</span>
        <span>Andre</span>
        <span>Tredje</span>
      </article>
    </div>
  )
}


export default CssDisplay