export const getIcon = (path, icon) => {
  const baseUrl = 'https://res.cloudinary.com/meraki-studio';
  const urlPath =
    path === 'space' || path === 'village'
      ? `stamps/${path}/${icon}`
      : `${path}/${icon}`;

  const url = `${baseUrl}/Fingerpaint/${urlPath}.svg`;

  return url;
};
