import React from 'react';

const SearchBox = ({searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 b---white bg-black br4 yellow tc"
                type="search" 
                placeholder="search the squad"
                onChange ={searchChange}
                />
        </div>
    );
}

export default SearchBox;