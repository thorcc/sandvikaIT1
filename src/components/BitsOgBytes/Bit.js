import React from 'react'
import { useState } from 'react'
import lightOn from './bilder/light-on.png'
import lightOff from './bilder/light-off.png'
import switchOn from './bilder/switch-on.png'
import switchOff from './bilder/switch-off.png'

import styles from './Bit.module.css'

function Bit (props) {
    return (
        <div onClick={() => props.handleClick(props.i)} className={styles.app}>
            <div className={`${styles.switch} ${props.light ? styles.switchOn : ""}`}>
                <h3>{props.light ? "på" : "av"}</h3>
               <img src={props.light ? switchOn : switchOff} />
            </div>
            <div>
                <img src={props.light ? lightOn : lightOff} />
            </div>
            <div>
                <h2>{props.light ? 1 : 0}</h2>
            </div>
        </div>
    )
}

export default Bit