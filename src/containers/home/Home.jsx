import React, { useEffect } from 'react';

import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useDrop } from 'react-dnd';
import { useMyArt } from '../../state/UserProvider';
import ArtItem from './ArtItem';
import { itemTypes } from '../../utils/itemTypes';
import '../containers.css';
// import AddIcon from '@mui/icons-material/Add';
// import MenuIcon from '@mui/icons-material/Menu';

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

  const horizontalLogo = new URL(
    '../../../public/assets/Logo_horiz.png',
    import.meta.url
  );

  const shareCanvas = new URL(
    '../../../public/assets/share.svg',
    import.meta.url
  );
  const newCanvas = new URL('../../../public/assets/new.svg', import.meta.url);
  const deleteCanvas = new URL(
    '../../../public/assets/trash.svg',
    import.meta.url
  );

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
      <AppBar
        position="absolute"
        color="transparent"
        sx={{
          top: 'auto',
          bottom: 0,
          boxShadow: 'none',
          height: 'fitContent',
        }}
      >
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              margin: '0 3rem',
            }}
          />
          <Button
            variant="text"
            style={{
              margin: '0 1rem .5rem',
            }}
            href="share"
          >
            <img src={shareCanvas} alt="SHARE" className="share" />
          </Button>
          <Button
            variant="text"
            style={{
              margin: '0 1rem .5rem',
            }}
            href="canvas"
          >
            <img src={newCanvas} alt="NEW" className="new" />
          </Button>
          <Button
            variant="text"
            style={{
              margin: '0 1rem .5rem',
              // color: isOver ? 'red' : 'blue',
            }}
            ref={drop}
          >
            <img src={deleteCanvas} alt="DELETE" />
          </Button>
        </Toolbar>
      </AppBar>
    </main>
  );
}
