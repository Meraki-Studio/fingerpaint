import React from 'react';
import ArtItem from './ArtItem';

export default function ArtList({ drawings }) {
    return (
        <section>
            {drawings.map((art) => {
                return (
                    <label key={art.id}>
                        <ArtItem art={art} />
                    </label>
                );
            })}
        </section>
    );
}
