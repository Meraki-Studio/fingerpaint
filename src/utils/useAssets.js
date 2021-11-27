export const useAssets = (path, icon) => {
  const baseUrl = 'https://res.cloudinary.com/meraki-studio';
  const urlPath =
    path === 'space' || path === 'village'
      ? `stamps/${path}/${icon}`
      : `${path}/${icon}`;

  const ext = path === 'mockups' ? 'png' : 'svg';
  const url = `${baseUrl}/Fingerpaint/${urlPath}.${ext}`;

  return url;
};
