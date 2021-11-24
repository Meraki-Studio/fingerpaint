export const topTools = [
  {
    icon: 'arrow-left',
    onClick: () => {
      console.log('back');
      navigate('/home');
    },
  },
  {
    icon: 'undo-alt',
    onClick: () => {
      console.log('undo');
    },
  },
  {
    icon: 'redo-alt',
    onClick: () => console.log('redo'),
  },
  {
    icon: 'expand-arrows-alt',
    onClick: () => {
      setPZ(!PZ);
      console.log('pan/zoom: ', PZ);
    },
  },
  {
    icon: 'eye',
    onClick: () => {
      setHidden(!hidden);
      console.log('show/hide');
    },
  },
];

export const bottomTools = [
  {
    icon: 'palette',
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
    icon: 'fill-drip',
    onClick: () => {
      console.log('fill');
    },
  },
  {
    icon: 'image',
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