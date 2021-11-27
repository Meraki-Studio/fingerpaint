import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { useDrop } from 'react-dnd';

import { useMyArt } from '../../state/UserProvider';
import ArtItem from './ArtItem';
import { itemTypes } from '../../utils/itemTypes';
import { useAssets } from '../../utils/useAssets';

import '../containers.scss';
import NewArt from '../../assets/icons/controls/NewArt.svg';

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
        <Link to="/canvas" className="newArtButton">
          <img src={NewArt} alt="Fingerpaint Add New" />
        </Link>
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
