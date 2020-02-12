import React from 'react';
import { GridLoader } from 'react-spinners';
import './PageLoader.css';

const PageLoader: React.FC = () =>
    <div className='PageLoader'>
        <GridLoader size={30}></GridLoader>
    </div>

export default PageLoader;