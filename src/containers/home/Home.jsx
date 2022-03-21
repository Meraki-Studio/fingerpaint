import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { useDrop, useDrag } from 'react-dnd';

import {
  useMyArt,
  useCurrentArt,
  useLoading,
  useArtId,
} from '../../state/UserProvider';
import ArtItem from './ArtItem';
import { itemTypes } from '../../utils/itemTypes';
import { useAssets } from '../../utils/useAssets';

import New from './buttons/New';
import Trash from './buttons/Trash';
// import Share from './buttons/Share';

import '../containers.scss';

export default function Home() {
  const { myArt, setMyArt } = useMyArt();
  const { setCurrentArt } = useCurrentArt();
  const { setArtId } = useArtId();
  const navigate = useNavigate();

  useEffect(() => {
    // fetch art from localStorage
    const localArtKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localArtKeys.push(key);
    }
    setMyArt(localArtKeys);
    console.log('Art keys pulled from localStorage: ', localArtKeys);
  }, [1]);

  const editArt = (art) => {
    console.log('art clicked: ', art);
    // set art id
    setArtId(art);

    // get art from localStorage
    setCurrentArt(localStorage.getItem(art));

    // navigate to edit page
    navigate('/canvas');
  };

  const newArt = () => {
    setArtId(Date.now());
    navigate('/canvas');
  };

  // const filter = (num) => {
  //   const filteredList = myArt.filter((art) => {
  //     console.log('item number: ', num);
  //     if (art.id > num || art.id < num) return art;
  //   });
  //   setMyArt(filteredList);
  //   return filteredList;
  // };

  // working on drop function below

  const [{ isOver }, drop] = useDrop({
    accept: itemTypes.CARD,
    // this is where you put the drop function, but I haven't figured out how to set it to trash vs share
    drop: (item, _monitor) => filter(item.id),
    // this might be where you pick what it's over?
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const horizontalLogo = useAssets('brand', 'LogoHorizontal');

  return (
    <main className="home">
      <img src={horizontalLogo} alt="Fingerpaint" className="homeLogo" />
      <section className="artDisplay">
        {myArt.map((art) => (
          <div key={art} className="artCard" onClick={() => editArt(art)}>
            <ArtItem art={art} />
          </div>
        ))}
      </section>
      <section className="buttonBar">
        <span className="sideButton">
          <Trash />
        </span>
        <span onClick={() => newArt()}>
          <New classname="newArtButton" />
        </span>
        {/* <span className="sideButton">
          <Share />
        </span> */}
      </section>
    </main>
  );
}
