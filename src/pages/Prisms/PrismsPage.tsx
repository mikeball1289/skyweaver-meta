import React, { useState, useEffect } from 'react';
import { MetaData } from '../../data/MetaData';
import { loadData } from '../../data/loader'
import PageLoader from '../../components/tools/PageLoader';

const PrismsPage = () => {
    const [error, setError] = useState<any>(undefined);
    const [data, setData] = useState<MetaData | null>(null);
    
    useEffect(() => {
        loadData()
            .then(d => setData(d))
            .catch(err => setError(err));
    });
    
    if (error) {
        return <pre>{ error }</pre>;
    } else if (data == null) {
        return <PageLoader />;
    } else {
        return <>
            <pre>{JSON.stringify(data.prisms, null, 2)}</pre>
        </>;
    }
}

export default PrismsPage;