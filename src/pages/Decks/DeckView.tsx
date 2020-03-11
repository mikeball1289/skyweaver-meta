import React from 'react';
import { DeckData } from '../../data/MetaData';
import DeckStats from './DeckStats';

export interface DeckViewProps {
    decks: DeckData[];
}

const DeckView: React.FC<DeckViewProps> = props =>
    <>
        { props.decks.map((d, i) => <DeckStats key={i} deck={ d } />) }
    </>;

export default DeckView;