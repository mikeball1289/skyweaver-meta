import React, { useState } from "react"

export interface ToggleTrayProps {
    title?: string;
}

const ToggleTray: React.FC<ToggleTrayProps> = props => {
    const [expanded, setExpanded] = useState(false);

    return <div style={{ border: 'solid black 2px', padding: 5 }}>
        <div
            onClick={ () => setExpanded(!expanded) }
            style={{ width: '100%' }}
        >{ (props.title || '') + ' ' + (expanded ? 'V' : '>') }</div>
        { expanded ? props.children : <></> }
    </div>
}

export default ToggleTray;