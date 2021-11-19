import React from 'react';

export default function ArtItem(art) {
    return (
        <label>
            <img src={art.thumbnail} alt={art.title} />
            {art.title}
        </label>
    );
}
