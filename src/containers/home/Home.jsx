import React, { useEffect } from 'react';
import { useMyArt } from '../../state/UserProvider';
import ArtItem from './ArtItem';
import '../containers.scss';

import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useDrop } from 'react-dnd';
import { itemTypes } from '../../utils/itemTypes';

export default function Home() {
  const { myArt, setMyArt } = useMyArt();

  const filter = (num) => {
    const filteredList = myArt.filter((art) => {
      console.log('item number: ', num);
      if (art.id > num || art.id < num) return art;
    });
    setMyArt(filteredList);
    return filteredList;
  };

  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (item, monitor) => filter(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const horizontalLogo = new URL(
    '../../../public/assets/Logo_horiz.png',
    import.meta.url
  );
  const newArt = new URL('../../../public/assets/NewArt.png', import.meta.url);
  const trashArt = new URL('../../../public/assets/Trash.png', import.meta.url);
  const shareArt = new URL('../../../public/assets/Share.png', import.meta.url);

  return (
    <main className="home">
      <img src={horizontalLogo} alt="Fingerpaint" className="homeLogo" />
      <section className="artDisplay">
        {myArt.map((art) => {
          return (
            <div key={art.id}>
              <ArtItem art={art} />
            </div>
          );
        })}
      </section>
      <Toolbar className="buttonBar">
        <img src={trashArt} alt="Fingerpaint" className="sideButton" />
        <Button href="canvas" className="newArtButton">
          <img src={newArt} alt="Fingerpaint" />
        </Button>
        <img src={shareArt} alt="Fingerpaint" className="sideButton" />
      </Toolbar>
    </main>
  );
}
