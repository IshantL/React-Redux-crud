import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({ games }) {
    
    const emptyMessage =(
        <p>There are no games yet in your ccollection</p>
    );


    const gamesList = (
        <p>games List</p>
    );

    return(
        <div>
        {games.length === 0? emptyMessage : gamesList}
        </div>
    );
}
GamesList.propTypes={
    games: PropTypes.array.isRequired
}