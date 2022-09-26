import React from 'react'
import { useState, useEffect } from 'react'
import styles from './BitsOgBytes.module.css'
import Bit from './Bit'

function BitsOgBytes(props) {
    const [bits, setBits] = useState(props.bits)

    const handleClick = i => {
        let newBits = [...bits]
        newBits[i] = bits[i] == 1 ? 0 : 1
        setBits(newBits)
    }
    return(
        <div>
        <div className={styles.app}>
            {bits.map((b, i) => <Bit handleClick={handleClick} i={i} key={i} light={b} />)}
        </div>
        <p>Vil vi kunne skrive det om til følgende rekke: {bits.slice(0, 4)} {bits.slice(4,8)}</p>
        </div>
    )
}

export default BitsOgBytes