import React, { useState, useEffect } from 'react';
import { MetaData } from '../../data/MetaData';
import { loadData } from '../../data/loader'
import PageLoader from '../../components/tools/PageLoader';
import CardGrid from '../../components/widgets/CardGrid';

const ConstructedCardsPage = () => {
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
        return <CardGrid
            cards={ data.constructedCards }
            constructedView={ true }
            defaultSort={{ key: 'pwp', order: 'normal' }}
        />;
    }
}

export default ConstructedCardsPage;