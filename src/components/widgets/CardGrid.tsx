import React, { useState } from 'react';
import { CardData } from '../../data/MetaData';
import { toPercentString } from '../../utils/format';
import './CardGrid.css';

export interface CardGridProps {
    cards: CardData[];
}

type SortKey = 'name' | 'play' | 'win';
type SortOrder = 'normal' | 'reverse';

type SortType = {
    key: SortKey;
    order: SortOrder;
} | {
    key: 'none';
};

function getSortForKey(sortKey: SortKey): (a: CardData, b: CardData) => number {
    switch (sortKey) {
        case 'name': return (a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        case 'play': return (a, b) => b.playrate - a.playrate;
        case 'win': return (a, b) => b.winrate - a.winrate;
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
        </colgroup>
        <tr>
            <th></th>
            <th onClick={ () => updateSortBy('name') }>Name { sortType.key === 'name' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th>
            <th onClick={ () => updateSortBy('play') }>Play rate { sortType.key === 'play' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th>
            <th onClick={ () => updateSortBy('win') }>Win rate { sortType.key === 'win' ? sortType.order === 'normal' ? 'v' : '^' : '' }</th>
        </tr>
        { cards.map((c, i) =>
            <tr key={ i }>
                <td><img src={ `https://assets.skyweaver.net/latest/full-cards/2x/${c.id}.png` }></img></td>
                <td>{ c.name }</td>
                <td>{ toPercentString(c.playrate) }</td>
                <td>{ toPercentString(c.winrate) }</td>
            </tr>
        ) }
    </table>;
}

export default CardGrid;