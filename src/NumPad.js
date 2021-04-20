import React from 'react'
import './NumPad.css'
import Button from './Button'

export default class NumPad extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="numpad">
                <Button id="button-delete" symbol="AC"/>
                <Button symbol="C"/>
                <Button symbol="<="/>
                <Button symbol="/"/>

                <Button symbol="7"/>
                <Button symbol="8"/>
                <Button symbol="9"/>
                <Button symbol="*"/>
                
                <Button symbol="4"/>
                <Button symbol="5"/>
                <Button symbol="6"/>
                <Button symbol="-"/>
                
                <Button symbol="1"/>
                <Button symbol="2"/>
                <Button symbol="3"/>
                <Button symbol="+"/>
                
                <Button symbol="%"/>
                <Button symbol="0"/>
                <Button symbol="1"/>
                <Button id="button-result" symbol="="/>
            </div>
        )
    }
}