import { useHidden } from '../../state/UserProvider';

const { hidden, setHidden } = useHidden();

export const topTools = [
  {
    icon: 'left-arrow',
    onClick: () => {
      console.log('back');
      navigate('/home');
    },
  },
  {
    icon: 'undo',
    onClick: () => {
      console.log('undo');
    },
  },
  {
    icon: 'redo',
    onClick: () => console.log('redo'),
  },
  {
    icon: 'pinch',
    onClick: () => {
      setPZ(!PZ);
      console.log('pan/zoom: ', PZ);
    },
  },
  {
    icon: 'hide_inactive_lt',
    onClick: () => {
      setHidden(!hidden);
      console.log('show/hide');
    },
  },
];

export const bottomTools = [
  {
    icon: 'color-palette',
    onClick: () => {
      console.log('palette');
      setShowPalette(!showPalette);
    },
  },
  {
    icon: 'paint-brush',
    onClick: () => {
      console.log('brush');
      setErase(false);
    },
  },
  {
    icon: 'stamp',
    onClick: () => console.log('stamp'),
  },
  {
    icon: 'paint-bucket',
    onClick: () => {
      console.log('fill');
    },
  },
  {
    icon: 'photo',
    onClick: () => console.log('image'),
  },
  {
    icon: 'eraser',
    onClick: ({ target }) => {
      console.log(`within eraser! erase: ${erase}, color: ${color}`);
      setErase(true);
    },
  },
];
