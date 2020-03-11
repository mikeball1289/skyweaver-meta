import React, { useState } from 'react';
import './ToggleTray.css';

export interface ToggleTrayProps {
    title?: string;
}

const ToggleTray: React.FC<ToggleTrayProps> = props => {
    const [expanded, setExpanded] = useState(false);

    return <div className='ToggleTray'>
        <div
            onClick={ () => setExpanded(!expanded) }
            className='ToggleTray-header'
        ><span>{ (props.title || '')}</span> {(expanded ? <span>&#8613;</span> : <span>&#8628;</span>) }</div>
        { expanded ? props.children : <></> }
    </div>
}

export default ToggleTray;