import React from 'react';
import ToggleTray from '../../components/tools/ToggleTray';
import { toPercentString } from '../../utils/format';
import { DeckData } from '../../data/MetaData';
import './DeckStats.css';

export interface DeckStatsProps {
    deck: DeckData;
}

const DeckStats: React.FC<DeckStatsProps> = props =>
    <div className='DeckStats'>
        <ToggleTray title={ props.deck.name }>
            <div>
                Play rate: { toPercentString(props.deck.playrate) }
            </div>
            <div>
                Win rate: { toPercentString(props.deck.winrate) }
            </div>
            <div>
                Sample deck: { props.deck.sampleDeck }
            </div>
            <div>
                Cards: { props.deck.cards.map(c => c.name).join(', ') }
            </div>
        </ToggleTray>
    </div>

export default DeckStats;