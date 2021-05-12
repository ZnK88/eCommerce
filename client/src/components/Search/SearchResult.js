import React from 'react';

import ArticlesGrid from '../HomePage/Articles/ArticlesGrid';

const SearchResult = ({ items, isLoading }) => {
    return (
        <div>
            {
                <ArticlesGrid isLoading={isLoading} items={items} />
            }
        </div>
    );
}

export default SearchResult;