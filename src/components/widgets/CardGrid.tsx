import React, { useState } from 'react';
import { CardData, ConstructedCardData } from '../../data/MetaData';
import { toPercentString } from '../../utils/format';
import './CardGrid.css';
import CardPreview from './CardPreview';

export type CardGridProps = {
    cards: CardData[];
    constructedView?: false;
} | {
    cards: ConstructedCardData[];
    constructedView: true;
}

type SortKey = 'name' | 'play' | 'win' | 'pwp';
type SortOrder = 'normal' | 'reverse';

type SortType = {
    key: SortKey;
    order: SortOrder;
} | {
    key: 'none';
};

const constructedCard = (c: CardData): ConstructedCardData => {
    if (c.hasOwnProperty('pessimisticWinRate')) {
        return c as ConstructedCardData;
    } else {
        throw new Error('Invalid card data');
    }
}

function getSortForKey(sortKey: SortKey): (a: CardData, b: CardData) => number {
    switch (sortKey) {
        case 'name': return (a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        case 'play': return (a, b) => b.useRate - a.useRate;
        case 'win': return (a, b) => b.winRate - a.winRate;
        case 'pwp': return (a, b) => constructedCard(b).pessimisticWinRate - constructedCard(a).pessimisticWinRate;
    }
}

function getSortAlgorithm(sortType: SortType): ((a: CardData, b: CardData) => number) | undefined {
    if (sortType.key === 'none') {
        return undefined;
    } else {
        const sorter = getSortForKey(sortType.key);
        if (sortType.order === 'reverse') {
            return (a, b) => -sorter(a, b);
        } else {
            return sorter;
        }
    }
}

const CardGrid: React.FC<CardGridProps> = props => {
    const [sortType, setSort] = useState<SortType>({ key: 'none' });

    const updateSortBy = (key: SortKey) => {
        if (sortType.key !== key) {
            setSort({ key, order: 'normal' });
        } else if (sortType.order === 'normal') {
            setSort({ key, order: 'reverse' });
        } else {
            setSort({ key: 'none' });
        }
    };

    const sorter = getSortAlgorithm(sortType);
    const cards = sorter ? [...props.cards].sort(sorter) : props.cards;

    return <table className='CardGrid'>
        <colgroup>
            <col span={1} style={{ width: '1px' }} />
            <col span={1} style={{ width: 'auto' }} />
            <col span={1} style={{ width: '25%' }} />
            <col span={1} style={{ width: '25%' }} />
            {props.constructedView ? 
                <col span={1} style={{ width: '25%' }} /> :
                <></>}
        </colgroup>
        <tbody>
            <tr>
                <th></th>
                <th onClick={ () => updateSortBy('name') }>Name { sortType.key === 'name' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th>
                <th onClick={ () => updateSortBy('play') }>Play rate { sortType.key === 'play' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th>
                <th onClick={ () => updateSortBy('win') }>Win rate { sortType.key === 'win' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th>
                {props.constructedView ? 
                    <th onClick={ () => updateSortBy('pwp') }>Pessimistic Win rate { sortType.key === 'pwp' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th> :
                    <></>}
            </tr>
            { cards.map((c, i) =>
                <tr key={ i }>
                    <td><CardPreview id={ c.id } /></td>
                    <td>{ c.name }</td>
                    <td>{ toPercentString(c.useRate) }</td>
                    <td>{ toPercentString(c.winRate) }</td>
                    {props.constructedView ? 
                        <td>{ toPercentString(constructedCard(c).pessimisticWinRate) }</td> :
                        <></>}
                </tr>
            ) }
        </tbody>
    </table>;
}

export default CardGrid;