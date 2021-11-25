/**
 * Example URLs:
 * Makers: https://res.cloudinary.com/meraki-studio/image/upload/v1637800449/Fingerpaint/makers/Nick.svg
 * Brand: https://res.cloudinary.com/meraki-studio/image/upload/v1637800515/Fingerpaint/brand/LogoHorizontal.svg
 * Space: https://res.cloudinary.com/meraki-studio/image/upload/v1637800287/Fingerpaint/stamps/space/050-monkey_z98pvp.svg
 * Village: https://res.cloudinary.com/meraki-studio/image/upload/v1637800320/Fingerpaint/stamps/village/050-field_jmef7u.svg
 */

export const getIcon = (path, icon) => {
  let vCode = '';

  switch (path) {
    case 'ui':
      vCode = 'v1637810541';
      break;
    case 'brand':
      vCode = 'v1637800515';
      break;
    case 'makers':
      vCode = 'v1637800449';
      break;
    case 'space':
      vCode = 'v1637800287';
      break;
    case 'village':
      vCode = 'v1637800320';
      break;
  }
  const baseUrl = 'https://res.cloudinary.com/meraki-studio/image/upload';
  const urlPath =
    path === 'space' || path === 'village'
      ? `stamps/${path}/${icon}`
      : `${path}/${icon}`;

  const url = `${baseUrl}/${vCode}/Fingerpaint/${urlPath}.svg`;

  return url;
};

// const test1 = getIcon('brand', 'LogoHorizontal');
// const test2 = getIcon('makers', 'Nick');
// const test3 = getIcon('space', '050-monkey');
// const test4 = getIcon('village', '050-field');
// const test5 = getIcon('ui', 'send');
