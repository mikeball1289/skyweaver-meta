import React from 'react';
import ToggleTray from '../../components/tools/ToggleTray';
import { toPercentString } from '../../utils/format';
import { DeckData } from '../../data/MetaData';
import './DeckStats.css';
import CardGrid from '../../components/widgets/CardGrid';

export interface DeckStatsProps {
    deck: DeckData;
}

const deckNameFromSampleList = (sampleList: string) => {
    const prism = sampleList.substr(3, 3);
    switch (prism) {
        case 'STR': return 'Strength';
        case 'AGY': return 'Agility';
        case 'WIS': return 'Wisdom';
        case 'INT': return 'Intellect';
        case 'HRT': return 'Heart';
        
        case 'STA': return 'Strength / Agility';
        case 'STW': return 'Strength / Wisdom';
        case 'STI': return 'Strength / Intellect';
        case 'STH': return 'Strength / Heart';
        
        case 'AGW': return 'Agility / Wisdom';
        case 'AGI': return 'Agility / Intellect';
        case 'HRA': return 'Heart / Agility';
        
        case 'INW': return 'Intellect / Wisdom';
        case 'HRI': return 'Heart / Intellect';

        case 'HRW': return 'Heart / Wisdom';
    }
}

const DeckStats: React.FC<DeckStatsProps> = props => {
    const copyDeckCode = () => {
        navigator.clipboard.writeText(props.deck.sampleDeck);
        // alert('Copying deck codes isn\'t supported yet, use the direct link instead');
    };

    const gotoDeckBuilderButton = () =>
        <form
            action={`https://beta.skyweaver.net/cards/build/${props.deck.sampleDeck.substr(3, 3)}/${props.deck.sampleDeck}`}
            method='get'
            target='_blank'
            style={{ display: 'inline-block' }}
        >
            <button title='Open in deck builder' type='submit'>&#128279;</button>
        </form>

    return (
    <div className='DeckStats'>
        <ToggleTray title={ deckNameFromSampleList(props.deck.sampleDeck) }>
            <div className='DeckStats-container'>
                <div style={{ gridArea: 'metap' }}>
                    Play rate: { toPercentString(props.deck.metaPercent) }
                </div>
                <div style={{ gridArea: 'winp' }}>
                    Win rate: { toPercentString(props.deck.winRate) }
                </div>
                <div style={{ gridArea: 'sampled' }}>
                    Sample deck: { `${props.deck.sampleDeck.substr(0, 9)}...` }
                    <button title='Copy deck code' onClick={() => copyDeckCode()}>&#128203;</button>
                    {gotoDeckBuilderButton()}
                </div>
                <div style={{ gridArea: 'cardgrid' }}>
                    <CardGrid cards={ props.deck.coreCards.concat(props.deck.commonCards) } />
                </div>
            </div>
        </ToggleTray>
    </div>
    );
}

export default DeckStats;