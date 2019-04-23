import React from 'react';

export default function GamesList({ games }) => {
    const emptyMessage =(
        <p>There are no games yet in your ccollection</p>
    );
    Const gamesList = (
        <p>games List</p>
    );
    return(
        <div>
        {games.length === 0? emptyMessage : gamesList}
        </div>
    );
}