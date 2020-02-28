import React from 'react';
import { CircleLoader } from 'react-spinners';
import './PageLoader.css';

const PageLoader: React.FC = () =>
    <div className='PageLoader'>
        <CircleLoader size={30}></CircleLoader>
    </div>

export default PageLoader;