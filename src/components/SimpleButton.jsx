import React from 'react'
import StyleHOC from './StyleHOC'

const SimpleButton = (props) => {
   
    return(
        <button
        style={props.style}
        >simple button</button>
    )
}

export default StyleHOC(SimpleButton)