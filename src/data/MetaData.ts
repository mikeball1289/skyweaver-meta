export interface CardData {
    id: number;
    name: string;
    useRate: number;
    winRate: number;
}

export interface ConstructedCardData extends CardData {
    pessimisticWinRate: number;
}

export interface DeckData {
    // name: string;
    sampleDeck: string;
    commonCards: CardData[];
    coreCards: CardData[];
    metaPercent: number;
    winRate: number;
}

export interface MetaData {
    constructedCards: ConstructedCardData[];
    discoveryCards: CardData[];
    archetypesData: DeckData[];
}