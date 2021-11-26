import React, { useEffect } from 'react';
import { AppBar, SvgIcon, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useDrop } from 'react-dnd';

import { useMyArt } from '../../state/UserProvider';
import ArtItem from './ArtItem';
import { itemTypes } from '../../utils/itemTypes';
import { useAssets } from '../../utils/useAssets';

import '../containers.scss';

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
    drop: (item, _monitor) => filter(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const horizontalLogo = useAssets('brand', 'LogoHorizontal');
  const newArt = useAssets('ui', 'addNew');
  const trashArt = useAssets('ui', 'trash');
  const shareArt = useAssets('ui', 'send');

  return (
    <main className="home">
      <img src={horizontalLogo} alt="Fingerpaint" className="homeLogo" />
      <section className="artDisplay">
        {myArt.map((art) => (
          <div key={art.id}>
            <ArtItem art={art} />
          </div>
        ))}
      </section>
      <Toolbar className="buttonBar">
        <img src={trashArt} height="50px" alt="delete" className="sideButton" />
        <Button href="canvas" className="newArtButton">
          <img src={newArt} alt="Fingerpaint" />
        </Button>
        <img
          src={shareArt}
          height="50px"
          alt="Fingerpaint"
          className="sideButton"
        />
      </Toolbar>
    </main>
  );
}
