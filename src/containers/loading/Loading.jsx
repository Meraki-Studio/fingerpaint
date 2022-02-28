import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssets } from '../../utils/useAssets';
import '../containers.scss';

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/canvas');
    }, 1300);
  }, []);

  const logoMain = useAssets('brand', 'LogoPrimary');

  return (
    <p className="loadingLogo">
      <img src={logoMain} alt="Fingerpaint" className="loadingImg" />
    </p>
  );
}
