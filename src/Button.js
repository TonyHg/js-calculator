import React from 'react'
import './Button.css'

export default function Button({ id, symbol }) {
    return (
        <div className="numpad-btn" id={id}>
            <span>{symbol}</span>
        </div>
    )
}