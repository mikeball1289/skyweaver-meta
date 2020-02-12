export interface CardData {
    id: number;
    name: string;
    playrate: number;
    winrate: number;
}

export interface DeckData {
    name: string;
    sampleDeck: string;
    cards: CardData[];
    playrate: number;
    winrate: number;
}

export interface PrismData {
    prism: string;
    playrate: number;
    winrate: number;
}

export interface MetaData {
    cards: CardData[];
    decks: DeckData[];
    prisms: {
        discovery: PrismData[];
        constructed: PrismData[];
    };
}