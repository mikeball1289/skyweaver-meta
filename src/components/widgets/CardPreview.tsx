import React from 'react';
import './CardPreview.css'

export interface CardPreviewProps {
    id: number;
}

const CardPreview: React.FC<CardPreviewProps> = props => {
    return (
    <>
        <img
            alt={ props.id.toString() }
            src={`https://assets.skyweaver.net/latest/full-cards/2x/${props.id}.png`}
            style={{ objectFit: 'none', width: '50px', height: '40px', objectPosition: 'center 20%' }}
        />
        <div style={{ width: 0, height: 0 }} className='CardPreview-cardtip'>
            <img
                alt={ props.id.toString() }
                src={`https://assets.skyweaver.net/latest/full-cards/2x/${props.id}.png`}
                style={{
                    position: "relative",
                    left: 50,
                    top: -90
                }}
            />
        </div>
    </>
    );
}

export default CardPreview;