import React, { useState, useEffect } from 'react';
import { MetaData } from '../../data/MetaData';
import { loadData } from '../../data/loader';
import PageLoader from '../../components/tools/PageLoader';
import DeckView from './DeckView';

const DecksPage = () => {
    const [error, setError] = useState<any>(undefined);
    const [data, setData] = useState<MetaData | null>(null);
    
    useEffect(() => {
        loadData()
            .then(d => setData(d))
            .catch(err => setError(err));
    }, []);
    
    if (error) {
        return <pre>{ error.toString() }</pre>;
    } else if (data == null) {
        return <PageLoader />;
    } else {
        return <DeckView decks={ data.archetypesData } />;
    }
}

export default DecksPage;