import React from 'react';
import ToggleTray from '../../components/tools/ToggleTray';
import { toPercentString } from '../../utils/format';
import { DeckData } from '../../data/MetaData';
import './DeckStats.css';
import CardGrid from '../../components/widgets/CardGrid';

export interface DeckStatsProps {
    deck: DeckData;
}

const DeckStats: React.FC<DeckStatsProps> = props =>
    <div className='DeckStats'>
        <ToggleTray title={ props.deck.name }>
            <div className='DeckStats-container'>
                <div style={{ gridArea: 'metap' }}>
                    Play rate: { toPercentString(props.deck.playrate) }
                </div>
                <div style={{ gridArea: 'winp' }}>
                    Win rate: { toPercentString(props.deck.winrate) }
                </div>
                <div style={{ gridArea: 'sampled' }}>
                    Sample deck: { props.deck.sampleDeck }
                </div>
                <div style={{ gridArea: 'cardgrid' }}>
                    <CardGrid cards={ props.deck.cards } />
                </div>
            </div>
        </ToggleTray>
    </div>

export default DeckStats;