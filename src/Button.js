import React from 'react'
import './Button.css'

export default function Button({ id, symbol, onClick }) {
    return (
        <div className="numpad-btn" onClick={() => onClick(symbol)} id={id}>
            <span>{symbol}</span>
        </div>
    )
}