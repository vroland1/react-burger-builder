import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
    {label: 'LETTUCE', type: 'salad'},
    {label: 'BACON', type: 'bacon'},
    {label: 'CHEESE', type: 'cheese'},
    {label: 'MEAT', type: 'meat'},
    {label: 'TOMATO', type: 'tomato'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            added={() => props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)}
            key={ctrl.label} 
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER</button>
    </div>
)
    

export default buildControls