import React from 'react';
import { useMyArt } from '../state/UserProvider';

import ArtList from '../components/art/ArtList';
import Welcome from '../components/Welcome';

export default function Home() {
    const { myArt } = useMyArt();
    console.log(myArt);

    return (
        <main>
            {/* menu + logo */}
            {myArt ? <ArtList drawings={myArt} /> : <Welcome />}
        </main>
    );
}
